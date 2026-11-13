# Website Bán Máy Tính Casio Cũ - Anh Ba Tự Nhiên

Website thương mại điện tử chuyên nghiệp, hiện đại phục vụ bán máy tính Casio cũ tuyển chọn (fx-580VN X, fx-880BTG, fx-570VN Plus...) dành riêng cho học sinh, sinh viên và sĩ tử ôn thi THPT Quốc Gia, Đánh giá năng lực.

Được phát triển đồng bộ dựa trên hệ sinh thái mạng xã hội của **Anh Ba Tự Nhiên**:
- **Facebook Fanpage:** [facebook.com/anh3tunhien](https://www.facebook.com/anh3tunhien/)
- **Kênh TikTok:** [@anh3tunhien](https://www.tiktok.com/@anh3tunhien)

---

## 🌟 Các Tính Năng Nổi Bật

1. **Giao Diện Chuẩn Sĩ Tử & Tối Ưu Chuyển Đổi:**
   - Phong cách hiện đại (Tailwind CSS, Glassmorphism, Responsive 100% trên Điện thoại & Máy tính).
   - Đồng hồ đếm ngược kỳ thi Tốt Nghiệp THPT Quốc Gia & Đánh giá năng lực.
   - Phân loại độ mới minh bạch: **Like New 99%**, **Đẹp Keng 95%**, **Học Sinh 90%** (Tiết kiệm 40% - 60% so với mua mới).

2. **Công Cụ Giả Lập Test Máy Casio Online (Độc Quyền):**
   - Hướng dẫn và mô phỏng bấm tổ hợp phím kiểm tra màn hình `SHIFT + 7 + ON` (Diagnostic Mode) để test điểm ảnh LCD, Checksum ROM và Mainboard zin.
   - Bảng 4 bước hướng dẫn soi tem chống giả Bitex phản quang 3D để học sinh tự tin khi nhận hàng.

3. **Tích Hợp Kênh TikTok & Video Review Triệu View:**
   - Các chuyên mục video ngắn từ `@anh3tunhien`: Cảnh báo Casio fake, Hướng dẫn bấm máy tìm nghiệm, Quy trình kiểm tra 40 bước.
   - Nút liên kết trực tiếp mở App TikTok và Fanpage Facebook.

4. **Giỏ Hàng & Đặt Hàng 1 Chạm (COD):**
   - Giỏ hàng lưu trữ tự động `localStorage`.
   - Áp dụng mã giảm giá (`ANHBA20K`, `SITU2026`).
   - Tùy chọn quà tặng kèm (Bao da chống sốc / Pin Maxell Nhật / Bảng công thức).
   - Form đặt hàng nhanh phương thức COD (nhận hàng kiểm tra bấm thử mới thanh toán).
   - Tự động sinh nội dung đơn hàng để nhắn nhanh qua **Zalo** hoặc **Facebook Messenger**.

5. **So Sánh Máy & Kho Tuyệt Chiêu Bấm Máy "Học Thông Minh" (Học Hỏi `@luoihoc172`):**
   - Bảng so sánh chi tiết **fx-580VN X** vs **fx-880BTG** kèm công cụ **Trắc Nghiệm Chọn Máy Trong 10 Giây**.
   - Kho tuyệt chiêu bấm máy thực chiến theo từng chuyên đề (Tìm cực trị hàm bậc 3, Quét tiệm cận, Kiểm tra tích phân hàm ẩn, Thống kê ghép nhóm 880BTG chuẩn GDPT 2018, Tọa độ Oxyz Vector) kèm nút demo giả lập trực tiếp trên màn hình LCD.

---

## 🚀 Hướng Dẫn Chạy Website

### Cách 1: Chạy ngay với Python Server (Khuyên dùng)
Mở PowerShell hoặc Command Prompt tại thư mục dự án và chạy:
```powershell
python server.py
```
Sau đó mở trình duyệt và truy cập:
👉 **`http://localhost:5000`**

### Cách 2: Mở trực tiếp file HTML
Bạn có thể nhấp đúp trực tiếp vào file `index.html` trong Windows Explorer để xem giao diện và trải nghiệm toàn bộ tính năng.

---

## 📁 Cấu Trúc Thư Mục & Dữ Liệu (`D:\Anh Ba Tự Nhiên`)
Toàn bộ mã nguồn và dữ liệu xây dựng web được lưu gọn tại thư mục này:

```text
D:\Anh Ba Tự Nhiên\
├── index.html                        # Giao diện chính hiện đại, tối ưu cho học sinh - sinh viên
├── styles.css                        # Stylesheet chuẩn sáng sủa, nút bấm giả lập & mobile nav
├── app.js                            # Logic lọc nhu cầu học tập, giỏ hàng, tra đơn & giả lập Casio
├── server.py                         # Python HTTP Server, API sản phẩm, lưu đơn & tra cứu bảo hành
├── chay-web.bat                      # Nhấp đúp để chạy nhanh trên Windows
├── README.md                         # Tài liệu hướng dẫn sử dụng
├── data\                             # Nơi lưu trữ toàn bộ dữ liệu động của web
│   ├── shop-config.json              # Hotline, Zalo, link Facebook/TikTok, mã giảm giá
│   ├── products.json                 # Danh mục 8 máy Casio & combo phụ kiện
│   ├── casio-tricks.json             # Kho 6 tuyệt chiêu bấm máy theo chuyên đề & dòng máy
│   └── orders.json                   # Cơ sở dữ liệu tự động lưu các đơn đặt hàng
└── assets\                           # Nơi lưu trữ ảnh, video, tài liệu thật của shop
    ├── HUONG-DAN-LUU-DU-LIEU.txt     # Hướng dẫn thay ảnh & tài liệu thực tế
    ├── images\
    │   ├── products\                 # Ảnh sản phẩm cục bộ (casio-880btg.jpg, casio-580vnx.svg...)
    │   ├── tiktok\                   # Ảnh bìa / video tải từ kênh @anh3tunhien
    │   └── feedback\                 # Ảnh feedback từ học sinh & phụ huynh
    └── docs\                         # File PDF Ebook "Bí Kíp Bấm Máy Casio"
```

---

## 🌐 Hướng Dẫn Đưa Lên Mạng (Deploy Miễn Phí)
- **Vercel / Netlify:** Kéo thả toàn bộ thư mục `casio-anh3tunhien` lên Netlify Drop hoặc import vào Vercel là có ngay link `.vercel.app` hoặc tên miền riêng (ví dụ: `casioanhba.vn`).
- **GitHub Pages:** Đẩy code lên GitHub repository và kích hoạt GitHub Pages trong mục Settings -> Pages.
