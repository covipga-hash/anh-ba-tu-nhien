import http.server
import socketserver
import json
import os
import sys
import urllib.parse
from datetime import datetime

PORT = 5000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
ORDERS_FILE = os.path.join(DATA_DIR, "orders.json")
PRODUCTS_FILE = os.path.join(DATA_DIR, "products.json")
CONFIG_FILE = os.path.join(DATA_DIR, "shop-config.json")
TRICKS_FILE = os.path.join(DATA_DIR, "casio-tricks.json")
QUIZ_FILE = os.path.join(DATA_DIR, "quiz.json")

os.makedirs(DATA_DIR, exist_ok=True)

# Ensure orders file exists
if not os.path.exists(ORDERS_FILE):
    with open(ORDERS_FILE, "w", encoding="utf-8") as f:
        json.dump([], f, ensure_ascii=False, indent=2)

class CasioShopHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        # Enable CORS for convenience
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def _send_json_file(self, filepath):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                data = f.read()
            self.wfile.write(data.encode('utf-8'))
        except Exception as e:
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/products":
            self._send_json_file(PRODUCTS_FILE)
            return

        elif path == "/api/config":
            self._send_json_file(CONFIG_FILE)
            return

        elif path == "/api/tricks":
            self._send_json_file(TRICKS_FILE)
            return

        elif path == "/api/quiz":
            self._send_json_file(QUIZ_FILE)
            return

        elif path == "/api/orders":
            self._send_json_file(ORDERS_FILE)
            return

        elif path == "/api/orders/lookup":
            query_params = urllib.parse.parse_qs(parsed.query)
            q = (query_params.get("q", [""])[0]).strip().lower()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            if not q:
                self.wfile.write(json.dumps([]).encode('utf-8'))
                return
            try:
                with open(ORDERS_FILE, "r", encoding="utf-8") as f:
                    orders = json.load(f)
                matches = []
                for o in orders:
                    oid = str(o.get("orderId", "")).lower()
                    phone = str(o.get("customer", {}).get("phone", "")).lower()
                    if q == oid or q == phone:
                        matches.append({
                            "orderId": o.get("orderId"),
                            "createdAt": o.get("createdAt"),
                            "status": o.get("status"),
                            "customerName": o.get("customer", {}).get("fullName"),
                            "items": [{"name": i.get("name"), "quantity": i.get("quantity"), "warranty": i.get("warranty")} for i in o.get("items", [])],
                            "total": o.get("pricing", {}).get("total", 0)
                        })
                self.wfile.write(json.dumps(matches, ensure_ascii=False).encode('utf-8'))
            except Exception as e:
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        elif path == "/api/health":
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            status = {
                "status": "online",
                "brand": "Anh Ba Tự Nhiên - Máy Tính Casio Cũ",
                "tiktok": "https://www.tiktok.com/@anh3tunhien",
                "facebook": "https://www.facebook.com/anh3tunhien/",
                "timestamp": datetime.now().isoformat()
            }
            self.wfile.write(json.dumps(status).encode('utf-8'))
            return

        # Serve static files as default
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/orders":
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length)
            
            try:
                order_data = json.loads(post_body.decode('utf-8'))
                
                # Assign order ID and timestamp
                now_str = datetime.now().strftime("%y%m%d%H%M%S")
                order_id = f"ABTN-{now_str}"
                order_data["orderId"] = order_id
                order_data["createdAt"] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
                order_data["status"] = "Chờ xác nhận (COD / Zalo)"

                # Save to orders.json
                orders = []
                if os.path.exists(ORDERS_FILE):
                    try:
                        with open(ORDERS_FILE, "r", encoding="utf-8") as f:
                            orders = json.load(f)
                    except Exception:
                        orders = []
                
                orders.insert(0, order_data) # Add newest first
                
                with open(ORDERS_FILE, "w", encoding="utf-8") as f:
                    json.dump(orders, f, ensure_ascii=False, indent=2)

                response_payload = {
                    "success": True,
                    "orderId": order_id,
                    "message": "Đơn hàng đã được ghi nhận thành công! Anh Ba Tự Nhiên sẽ gọi xác nhận và gửi hàng ngay.",
                    "order": order_data
                }

                self.send_response(201)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps(response_payload, ensure_ascii=False).encode('utf-8'))
                return

            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
                return

        self.send_response(404)
        self.end_headers()

def run_server():
    os.chdir(BASE_DIR)
    with socketserver.TCPServer(("", PORT), CasioShopHandler) as httpd:
        print(f"================================================================")
        print(f" [ANH BA TỰ NHIÊN] Web Bán Máy Tính Casio Cũ Chính Hãng Đang Chạy")
        print(f" URL: http://localhost:{PORT}")
        print(f" Facebook: https://www.facebook.com/anh3tunhien/")
        print(f" TikTok: https://www.tiktok.com/@anh3tunhien")
        print(f"================================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nĐã dừng máy chủ.")

if __name__ == "__main__":
    run_server()
