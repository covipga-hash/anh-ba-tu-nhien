/**
 * Anh Ba Tự Nhiên - Máy Tính Casio Cũ Chính Hãng
 * Professional Student-Friendly E-Commerce Logic
 */

const DEFAULT_CONFIG = {
  "shopName": "ANH BA TỰ NHIÊN",
  "tagline": "Kho Máy Tính Casio Cũ Chuẩn Sĩ Tử",
  "hotline": "0987.xxx.xxx",
  "zaloPhone": "0987654321",
  "facebookUrl": "https://www.facebook.com/anh3tunhien/",
  "tiktokUrl": "https://www.tiktok.com/@anh3tunhien",
  "tiktokHandle": "@anh3tunhien",
  "threadsUrl": "https://www.threads.com/@_hgtuditto",
  "threadsHandle": "@_hgtuditto",
  "promoBanner": "Tặng Bảng 100 Công Thức Bấm Máy Casio + Pin Nhật Zin + Miễn Phí Giao Hàng Toàn Quốc!",
  "vouchers": {
    "ANHBA20K": {
      "discount": 20000,
      "desc": "Giảm ~20.000đ trực tiếp cho sĩ tử"
    },
    "SITU2026": {
      "discount": 30000,
      "desc": "Giảm ~30.000đ ưu đãi mùa thi"
    },
    "FREESHIP": {
      "discount": 25000,
      "desc": "Hỗ trợ ~25.000đ phí vận chuyển"
    }
  }
};

const DEFAULT_PRODUCTS = [
  {
    "id": "fx-580vnx-99",
    "name": "Casio fx-580VN X (Hạng S • Like New 99% Như Mới)",
    "series": "fx-580VN X",
    "grade": "99%",
    "badge": "Bán Chạy Nhất",
    "originalPrice": 750000,
    "salePrice": 460000,
    "savePercent": 39,
    "rating": 5.0,
    "sold": 1420,
    "warranty": "12 tháng (1 đổi 1)",
    "color": "Đen Carbon / Xanh Dương / Hồng",
    "status": "Còn hàng",
    "features": [
      "521 tính năng cao cấp cho thi THPTQG & ĐGNL",
      "Độ phân giải gấp 4 lần dòng 570, hiển thị tiếng Việt",
      "Tốc độ xử lý phương trình, ma trận siêu nhanh",
      "Đã qua 40 bước test kỹ thuật của Anh Ba"
    ],
    "gift": "Tặng Bảng 100 Công Thức + Pin Maxell Nhật Mới",
    "image": "assets/images/products/casio-580vnx.svg",
    "tags": [
      "fx-580",
      "likenew",
      "hot",
      "thpt"
    ],
    "condition_percent": 99,
    "lid": null,
    "seals": null,
    "classification": null
  },
  {
    "id": "fx-580vnx-95",
    "name": "Casio fx-580VN X (Hạng A • Đẹp 95% Main Zin 100%)",
    "series": "fx-580VN X",
    "grade": "95%",
    "badge": "Tiết Kiệm Số 1",
    "originalPrice": 750000,
    "salePrice": 399000,
    "savePercent": 47,
    "rating": 4.9,
    "sold": 2150,
    "warranty": "6 tháng (1 đổi 1)",
    "color": "Đen / Trắng sữa",
    "status": "Còn hàng",
    "features": [
      "Màn hình trong vắt không tì vết, phím bấm cực êm",
      "Vỏ ngoài chỉ xước dăm siêu nhẹ, nắp trượt khít",
      "Mainboard nguyên bản 100%, chưa qua sửa chữa",
      "Tem chống giả Bitex phản quang 3D chuẩn chỉ"
    ],
    "gift": "Tặng Pin Nhật Mới + Ebook Mẹo Bấm Casio 9+",
    "image": "assets/images/products/casio-580vnx.svg",
    "tags": [
      "fx-580",
      "tietkiem",
      "thpt"
    ],
    "condition_percent": 95,
    "lid": true,
    "seals": null,
    "classification": null
  },
  {
    "id": "fx-880btg-99",
    "name": "Casio fx-880BTG (Hạng S • Like New 99% Hiện Đại)",
    "series": "fx-880BTG",
    "grade": "99%",
    "badge": "Chuẩn SGK Mới",
    "originalPrice": 890000,
    "salePrice": 590000,
    "savePercent": 34,
    "rating": 5.0,
    "sold": 680,
    "warranty": "12 tháng (1 đổi 1)",
    "color": "Đen Huyền Bí / Xanh Pastel / Hồng",
    "status": "Còn hàng",
    "features": [
      "Màn hình LCD 4 cấp độ xám sắc nét, phím tròn êm tay",
      "Quét mã QR hiển thị đồ thị hàm số lên điện thoại",
      "Bảng tính Spreadsheet, Thống kê & Xác suất Bayes mới",
      "Được Bộ GD&ĐT cho phép mang vào phòng thi"
    ],
    "gift": "Tặng Bao Da Chống Sốc + Tài Liệu 880BTG",
    "image": "assets/images/products/casio-880btg.jpg",
    "tags": [
      "fx-880",
      "caocap",
      "dgnl",
      "sgkmoi"
    ],
    "condition_percent": 99,
    "lid": null,
    "seals": null,
    "classification": null
  },
  {
    "id": "fx-880btg-95",
    "name": "Casio fx-880BTG (Hạng A • Đẹp 95% Giá Sinh Viên)",
    "series": "fx-880BTG",
    "grade": "95%",
    "badge": "Tiết Kiệm ~360k",
    "originalPrice": 890000,
    "salePrice": 530000,
    "savePercent": 40,
    "rating": 4.9,
    "sold": 410,
    "warranty": "6 tháng (1 đổi 1)",
    "color": "Xám Bạc / Đen",
    "status": "Còn hàng",
    "features": [
      "Xử lý biểu thức phức tạp nhanh gấp 2 lần đời cũ",
      "Phím bấm tròn công thái học nảy đều mọi nút",
      "Đã thay pin mới, vệ sinh kỹ mạch điện",
      "Hỗ trợ tốt cả THPTQG mới & Đại học"
    ],
    "gift": "Tặng Ebook Hướng Dẫn 880BTG + Pin Dự Phòng",
    "image": "assets/images/products/casio-880btg.jpg",
    "tags": [
      "fx-880",
      "tietkiem",
      "thpt",
      "sgkmoi"
    ],
    "condition_percent": 95,
    "lid": null,
    "seals": null,
    "classification": null
  },
  {
    "id": "fx-570vnplus-99",
    "name": "Casio fx-570VN Plus (Hạng S • Vỏ Bạc Xanh 99% Zin)",
    "series": "fx-570VN Plus",
    "grade": "99%",
    "badge": "Phù Hợp Cấp 2",
    "originalPrice": 550000,
    "salePrice": 290000,
    "savePercent": 47,
    "rating": 4.8,
    "sold": 3400,
    "warranty": "6 tháng (1 đổi 1)",
    "color": "Bạc Xanh Zin",
    "status": "Còn hàng",
    "features": [
      "453 tính năng căn bản bền bỉ vượt thời gian",
      "Phù hợp học sinh lớp 6–9 hoặc máy dự phòng phòng thi",
      "Tiết kiệm tối đa chi phí cho phụ huynh",
      "Đã kiểm tra kỹ bo mạch & thay pin mới"
    ],
    "gift": "Tặng Pin Maxell Zin + Bảng Công Thức Cấp 2",
    "image": "assets/images/products/casio-570vnplus.svg",
    "tags": [
      "fx-570",
      "giare",
      "cap2"
    ],
    "condition_percent": 99,
    "lid": null,
    "seals": null,
    "classification": null
  },
  {
    "id": "fx-570esplus-95",
    "name": "Casio fx-570ES Plus (Hạng A • Giá Siêu Mềm Sinh Viên)",
    "series": "fx-570ES Plus",
    "grade": "95%",
    "badge": "Chỉ ~220K",
    "originalPrice": 480000,
    "salePrice": 220000,
    "savePercent": 54,
    "rating": 4.8,
    "sold": 1890,
    "warranty": "6 tháng (1 đổi 1)",
    "color": "Xám Ghi",
    "status": "Còn hàng",
    "features": [
      "Dòng máy quốc dân bền bỉ, dễ làm quen",
      "Dành cho sinh viên đại cương & học sinh cấp 2",
      "Phím số rõ ràng, màn hình Natural V.P.A.M",
      "Cam kết không loạn phím, không mờ nét"
    ],
    "gift": "Tặng Pin Mới Thay Sẵn Trong Máy",
    "image": "assets/images/products/casio-570vnplus.svg",
    "tags": [
      "fx-570",
      "giare",
      "sinhvien",
      "cap2"
    ],
    "condition_percent": 95,
    "lid": null,
    "seals": null,
    "classification": null
  },
  {
    "id": "combo-phu-kien-vip",
    "name": "Combo Phụ Kiện Sĩ Tử (Bao Da EVA + 2 Pin Nhật + Bút)",
    "series": "Phụ Kiện",
    "grade": "100%",
    "badge": "Mua Kèm Tiết Kiệm",
    "originalPrice": 120000,
    "salePrice": 65000,
    "savePercent": 46,
    "rating": 5.0,
    "sold": 980,
    "warranty": "Bảo hành 1 đổi 1",
    "color": "Đen / Xanh Navy",
    "status": "Còn hàng",
    "features": [
      "Bao da dày lót nhung chống vỡ màn hình khi rơi",
      "2 viên pin Maxell Made in Japan chuẩn điện áp",
      "Bút chì 2B chuyên dụng tô phiếu trắc nghiệm",
      "Bảng tóm tắt đạo hàm - nguyên hàm ép dẻo"
    ],
    "gift": "Miễn phí ship khi mua kèm máy tính Casio",
    "image": "assets/images/products/combo-accessories.svg",
    "tags": [
      "phukien",
      "combo",
      "baoda"
    ],
    "condition_percent": 100,
    "lid": null,
    "seals": null,
    "classification": "Phụ kiện"
  },
  {
    "id": "combo-luoi-hoc-chinh-phuc-9",
    "name": "Combo 'Học Thông Minh' 9+ (fx-880BTG 99% + Cẩm Nang + Bao Da)",
    "series": "fx-880BTG",
    "grade": "99%",
    "badge": "Combo Sĩ Tử 9+",
    "originalPrice": 1050000,
    "salePrice": 625000,
    "savePercent": 40,
    "rating": 5.0,
    "sold": 520,
    "warranty": "12 tháng (1 đổi 1)",
    "color": "Đen Huyền Bí / Xanh / Hồng",
    "status": "Còn hàng",
    "features": [
      "Casio fx-880BTG Like New 99% (Hỗ trợ đầy đủ SGK mới)",
      "Bộ Ebook 12 chuyên đề bấm nhanh Toán - Lý - Hóa",
      "Bao da chống va đập + 2 pin Maxell Nhật dự phòng",
      "Bảo hành 1 đổi 1 toàn quốc + Freeship hỏa tốc"
    ],
    "gift": "Miễn Phí Ship + Tặng Thước Parabol & Bút Chì 2B",
    "image": "assets/images/products/casio-880btg.jpg",
    "tags": [
      "fx-880",
      "combo",
      "likenew",
      "thpt",
      "dgnl",
      "sgkmoi"
    ],
    "condition_percent": 99,
    "lid": null,
    "seals": null,
    "classification": null
  }
];

const DEFAULT_TRICKS = [
  {
    "id": "trick-cuc-tri-580",
    "title": "Tính Khoảng Cách 2 Điểm Cực Trị Hàm Bậc 3 Trong 5 Giây",
    "model": "fx-580VN X",
    "topic": "Hàm số",
    "timeSaved": "Tiết kiệm 3 phút",
    "sourceStyle": "Giải đề Chuyên Chu Văn An",
    "problem": "Tìm độ dài đoạn thẳng nối hai điểm cực trị A, B của đồ thị hàm số y = x³ - 3x² + 2.",
    "steps": [
      "MENU", "9", "2", "3", "Nhập hệ số a, b, c, d", "=", "=", "=", "Nhấn [=] liên tiếp để xem (x₁, y₁) và (x₂, y₂)"
    ],
    "explain": "Casio fx-580VN X tự động giải phương trình bậc 3 và in thẳng tọa độ Điểm Cực Đại (x, y) lẫn Điểm Cực Tiểu (x, y) mà không cần đạo hàm bằng tay! Sau đó bấm √((x₁-x₂)² + (y₁-y₂)²) là ra đáp án.",
    "recommendedProductId": "fx-580vnx-99"
  },
  {
    "id": "trick-thong-ke-880",
    "title": "Thống Kê Ghép Nhóm & Độ Lệch Chuẩn Chuẩn GDPT 2018",
    "model": "fx-880BTG",
    "topic": "Xác suất & Oxyz",
    "timeSaved": "Chuẩn SGK Mới 100%",
    "sourceStyle": "Đề Minh Họa THPTQG Mới",
    "problem": "Tính số trung bình, phương sai s² và độ lệch chuẩn s của mẫu số liệu ghép nhóm điểm thi.",
    "steps": [
      "HOME", "Statistics", "1-Variable", "TOOLS", "Frequency ON", "Nhập giá trị đại diện + Tần số", "EXE", "1-Var Results"
    ],
    "explain": "Dòng Casio fx-880BTG (và bản PLUS) hiển thị rõ Tứ phân vị Q₁, Q₂, Q₃, Phương sai mẫu s²ₓ và Độ lệch chuẩn σₓ trên cùng 1 màn hình độ phân giải cao.",
    "recommendedProductId": "fx-880btg-99"
  },
  {
    "id": "trick-tich-phan-ham-an",
    "title": "Kiểm Tra Đáp Án Nguyên Hàm - Tích Phân Bằng d/dx + CALC",
    "model": "fx-580VN X",
    "topic": "Tích phân",
    "timeSaved": "Chính xác 99.9%",
    "sourceStyle": "Tuyệt chiêu chống sai dấu",
    "problem": "Tìm nguyên hàm F(x) của hàm số f(x) = x·e^(2x) (hoặc các bài hàm phức tạp nhiều tham số).",
    "steps": [
      "SHIFT", "∫ (d/dx)", "Nhập đáp án F(x)", "x = 1.5", "-", "Nhập đề f(1.5)", "="
    ],
    "explain": "Theo định nghĩa F'(x) = f(x). Chỉ cần tính đạo hàm tại điểm x bất kỳ (ví dụ x = 1.5) trừ đi giá trị f(1.5). Đáp án nào cho kết quả bằng 0 (hoặc 10⁻¹⁰) là đáp án đúng tuyệt đối!",
    "recommendedProductId": "fx-580vnx-95"
  },
  {
    "id": "trick-tiem-can-table",
    "title": "Quét Tiệm Cận Đứng & Tiệm Cận Ngang Siêu Tốc",
    "model": "fx-580VN X",
    "topic": "Hàm số",
    "timeSaved": "Không cần viết nháp",
    "sourceStyle": "Mẹo Lười Học Cấp Tốc",
    "problem": "Tìm tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị chứa căn thức ở tử và mẫu.",
    "steps": [
      "CALC (hoặc MENU 8)", "Nhập hàm phân thức f(x)", "Thử x = 10⁹ (Tiệm cận ngang +∞)", "Thử x = -10⁹ (-∞)", "Thử x = x₀ ± 10⁻⁶ (Tiệm cận đứng)"
    ],
    "explain": "Khi thay x = 10⁹ mà kết quả ra một hằng số hữu hạn thì đó chính là tiệm cận ngang. Khi thay nghiệm mẫu x₀ + 0.000001 mà ra số cực lớn (>10⁶) thì đó là tiệm cận đứng!",
    "recommendedProductId": "fx-580vnx-99"
  },
  {
    "id": "trick-do-thi-qr-880",
    "title": "Vẽ Đồ Thị Hàm Số Bằng Mã QR & Math Box Mô Phỏng Xác Suất",
    "model": "fx-880BTG",
    "topic": "Xác suất & Oxyz",
    "timeSaved": "Trực quan 100%",
    "sourceStyle": "Đặc quyền fx-880BTG",
    "problem": "Khảo sát sự biến thiên, số giao điểm f(x) = m và bảng tính nghiệm khi ôn luyện tại nhà.",
    "steps": [
      "HOME", "Table", "Nhập f(x) & g(x)", "EXE", "SHIFT", "QR", "Quét mã trên điện thoại xem đồ thị màu"
    ],
    "explain": "Casio fx-880BTG tạo mã QR trực tiếp cho phép học sinh ôn thi tại nhà nhìn thấy ngay hình dạng đồ thị, cực đại/cực tiểu và nghiệm giao điểm cực kỳ dễ hiểu.",
    "recommendedProductId": "fx-880btg-95"
  },
  {
    "id": "trick-oxyz-vector",
    "title": "Tính Tích Có Hướng & Khoảng Cách Chéo Nhau Oxyz Trong 10s",
    "model": "fx-580VN X",
    "topic": "Xác suất & Oxyz",
    "timeSaved": "Tiết kiệm 4 phút",
    "sourceStyle": "Ăn chắc điểm 8+ Hình Oxyz",
    "problem": "Cho 2 đường thẳng chéo nhau Δ₁, Δ₂ trong không gian Oxyz. Tính khoảng cách d(Δ₁, Δ₂).",
    "steps": [
      "MENU", "5 (Vector)", "Tạo VctA = u₁, VctB = u₂, VctC = M₁M₂", "OPTN", "Abs((VctA × VctB) • VctC) ÷ Abs(VctA × VctB)"
    ],
    "explain": "Thay vì tính tay 3 lần tích có hướng rất dễ nhầm dấu âm/dương, nhập thẳng vào Vector Mode giúp bạn bấm công thức |[u₁, u₂] · M₁M₂| / |[u₁, u₂]| ra đáp án chính xác từng dấu phẩy.",
    "recommendedProductId": "fx-580vnx-99"
  }
];

const state = {
  config: { ...DEFAULT_CONFIG },
  products: [],
  filteredProducts: [],
  tricks: [],
  filteredTricks: [],
  cart: JSON.parse(localStorage.getItem('abtn_cart') || '[]'),
  currentCategory: 'all',
  currentClassification: 'all',
  currentGrade: 'all',
  currentTag: null,
  searchQuery: '',
  appliedVoucher: null,
  simKeysPressed: []
};

// Helper: Phân loại máy theo chuẩn quy định
function getProductClassification(product) {
  if (product.classification) return product.classification;
  if (product.series === 'Phụ Kiện') return 'Phụ kiện';
  
  if (product.lid === true && product.seals === 2 && (product.condition_percent >= 99 || product.grade === '99%')) {
    return 'Like new (2 tem, có nắp)';
  }
  if (product.lid === true && product.seals === 2) {
    return 'Có nắp 2 tem';
  }
  if (product.lid === true && product.seals === 1) {
    return 'Có nắp 1 tem';
  }
  if (product.lid === false && (product.seals === 0 || product.seals === null)) {
    return 'Không nắp không tem';
  }
  return 'Chờ Cơ xác nhận';
}

let VOUCHERS = { ...DEFAULT_CONFIG.vouchers };

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  initCountdown();
  await loadShopConfig();
  await loadProducts();
  await loadTricks();
  renderProducts();
  renderTricks();
  updateCartUI();
  setupEventListeners();
  initDiagnosticSimulator();
});

// Shared JSON loader with API -> local file -> embedded fallback
async function fetchDataWithFallback(apiUrl, fileUrl, fallbackData) {
  try {
    const res = await fetch(apiUrl);
    if (res.ok) return await res.json();
  } catch (_) {}
  try {
    const resLocal = await fetch(fileUrl);
    if (resLocal.ok) return await resLocal.json();
  } catch (_) {}
  return fallbackData;
}

async function loadShopConfig() {
  const loaded = await fetchDataWithFallback('/api/config', 'data/shop-config.json', DEFAULT_CONFIG);
  state.config = { ...DEFAULT_CONFIG, ...loaded };
  if (state.config.vouchers) {
    VOUCHERS = { ...DEFAULT_CONFIG.vouchers, ...state.config.vouchers };
  }
  applyShopConfigToDOM();
}

function applyShopConfigToDOM() {
  document.querySelectorAll('.hotline-display').forEach(el => {
    el.textContent = state.config.hotline || DEFAULT_CONFIG.hotline;
  });
  document.querySelectorAll('.zalo-direct-link').forEach(el => {
    el.href = `https://zalo.me/${state.config.zaloPhone || DEFAULT_CONFIG.zaloPhone}`;
  });
  document.querySelectorAll('.threads-direct-link').forEach(el => {
    el.href = state.config.threadsUrl || DEFAULT_CONFIG.threadsUrl;
  });
}

async function loadProducts() {
  state.products = await fetchDataWithFallback('/api/products', 'data/products.json', [...DEFAULT_PRODUCTS]);
  state.filteredProducts = [...state.products];
}

async function loadTricks() {
  state.tricks = await fetchDataWithFallback('/api/tricks', 'data/casio-tricks.json', [...DEFAULT_TRICKS]);
  state.filteredTricks = [...state.tricks];
}

// Render Clean Student-Friendly Product Cards
function renderProducts() {
  const container = document.getElementById('products-grid');
  const countBadge = document.getElementById('product-count-badge');
  if (!container) return;

  if (countBadge) {
    countBadge.textContent = `${state.filteredProducts.length} máy sẵn sàng giao`;
  }

  if (state.filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-14 text-center bg-white rounded-2xl border border-slate-200">
        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
          <i class="fa-solid fa-calculator"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-900">Không tìm thấy dòng máy phù hợp</h3>
        <p class="text-slate-500 text-xs mt-1">Thử bỏ bộ lọc hoặc tìm từ khóa khác (ví dụ: 580, 880, 570...)</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition">
          Xem Tất Cả Máy
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.filteredProducts.map(product => {
    const classification = getProductClassification(product);
    const percentDisplay = product.condition_percent ? `${product.condition_percent}%` : (product.grade || '100%');
    
    // Badge style for classification
    const classBadgeStyle = classification === 'Like new (2 tem, có nắp)'
      ? 'bg-emerald-600 text-white'
      : classification === 'Có nắp 2 tem'
        ? 'bg-blue-600 text-white'
        : classification === 'Có nắp 1 tem'
          ? 'bg-indigo-600 text-white'
          : classification === 'Không nắp không tem'
            ? 'bg-amber-600 text-white'
            : classification === 'Phụ kiện'
              ? 'bg-slate-800 text-white'
              : 'bg-amber-100 text-amber-800 border border-amber-300';

    return `
      <article class="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
        <!-- Product Image -->
        <div class="relative bg-slate-100 aspect-[4/3] overflow-hidden">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 text-[11px] font-bold rounded-md ${classBadgeStyle} shadow-sm">
              ${classification}
            </span>
            ${product.badge ? `
              <span class="px-2 py-0.5 text-[11px] font-bold rounded-md bg-slate-900/85 text-white shadow-sm">
                ${product.badge.replace(/(\d+k)/i, '~$1')}
              </span>
            ` : ''}
          </div>

          <span class="absolute top-3 right-3 bg-blue-600 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md shadow-sm">
            -${product.savePercent}%
          </span>

          <button 
            onclick="openQuickView('${product.id}')"
            class="absolute inset-x-4 bottom-3 py-2 bg-white/95 hover:bg-white text-slate-900 text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <i class="fa-regular fa-eye text-blue-600"></i> Xem Chi Tiết Máy
          </button>
        </div>

        <!-- Product Info -->
        <div class="p-4 flex-1 flex flex-col">
          <div class="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span class="font-bold text-blue-600">${product.series}</span>
            <span><i class="fa-solid fa-star text-amber-400 mr-0.5"></i> ${product.rating} • Đã bán ${product.sold}+</span>
          </div>

          <h3 class="font-bold text-slate-900 text-sm leading-snug line-clamp-2 min-h-[2.5rem] mb-2" title="${product.name}">
            ${product.name}
          </h3>

          <!-- SPEC BAR: Có nắp hay không, mấy tem, độ mới bao nhiêu % -->
          <div class="grid grid-cols-3 gap-1 p-2 bg-slate-50 rounded-xl border border-slate-200/80 text-center mb-3">
            <div class="flex flex-col">
              <span class="text-[9px] text-slate-400 font-semibold uppercase">Độ mới</span>
              <span class="font-extrabold text-blue-700 text-xs">${percentDisplay}</span>
            </div>
            <div class="flex flex-col border-x border-slate-200/80">
              <span class="text-[9px] text-slate-400 font-semibold uppercase">Nắp máy</span>
              <span class="font-bold text-xs ${product.lid === true ? 'text-emerald-600' : product.lid === false ? 'text-slate-600' : 'text-amber-600'}">
                ${product.lid === true ? '<i class=\"fa-solid fa-check text-[10px]\"></i> Có nắp' : product.lid === false ? '<i class=\"fa-solid fa-xmark text-[10px]\"></i> K.nắp' : 'Chờ xác nhận'}
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-[9px] text-slate-400 font-semibold uppercase">Tem Bitex</span>
              <span class="font-bold text-xs ${product.seals === 2 ? 'text-blue-600' : product.seals === 1 ? 'text-indigo-600' : product.seals === 0 ? 'text-slate-600' : 'text-amber-600'}">
                ${product.seals === 2 ? '2 tem' : product.seals === 1 ? '1 tem' : product.seals === 0 ? '0 tem' : 'Chờ xác nhận'}
              </span>
            </div>
          </div>

          <ul class="space-y-1 text-[11px] text-slate-600 mb-3">
            ${product.features.slice(0, 2).map(f => `
              <li class="flex items-start gap-1.5">
                <i class="fa-solid fa-check text-emerald-600 mt-0.5 shrink-0"></i>
                <span class="line-clamp-1">${f}</span>
              </li>
            `).join('')}
          </ul>

          <div class="bg-blue-50/70 border border-blue-100 rounded-lg px-2.5 py-1.5 text-[11px] text-blue-800 font-medium truncate mb-3">
            <i class="fa-solid fa-gift text-blue-600 mr-1"></i> ${product.gift}
          </div>

          <div class="pt-3 border-t border-slate-100 mt-auto">
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-lg font-extrabold text-slate-900">${formatMoney(product.salePrice)}</span>
                <span class="text-xs text-slate-400 line-through ml-1">${formatMoney(product.originalPrice)}</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                ${product.warranty}
              </span>
            </div>

            <div class="grid grid-cols-5 gap-2 mb-2">
              <button 
                onclick="addToCart('${product.id}', true)" 
                class="col-span-3 py-2.5 px-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center justify-center gap-1"
              >
                Đặt Ngay
              </button>
              <button 
                onclick="addToCart('${product.id}', false)" 
                class="col-span-2 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1"
                title="Thêm vào giỏ"
              >
                <i class="fa-solid fa-cart-plus"></i> Giỏ
              </button>
            </div>

            <a 
              href="https://www.threads.com/@_hgtuditto" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
              title="Nhắn shop trên Threads @_hgtuditto"
            >
              <i class="fa-brands fa-threads text-sm"></i>
              <span>Nhắn shop (Threads @_hgtuditto)</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filtering
function applyFilters() {
  state.filteredProducts = state.products.filter(p => {
    let matchCat = true;
    if (state.currentCategory !== 'all') {
      if (state.currentCategory === '580') matchCat = p.series.includes('580');
      else if (state.currentCategory === '880') matchCat = p.series.includes('880');
      else if (state.currentCategory === '570') matchCat = p.series.includes('570');
      else if (state.currentCategory === 'phukien') matchCat = p.series.includes('Phụ Kiện');
    }

    let matchClass = true;
    if (state.currentClassification !== 'all') {
      const cls = getProductClassification(p);
      matchClass = cls === state.currentClassification || p.classification === state.currentClassification;
    }

    let matchGrade = true;
    if (state.currentGrade !== 'all') {
      const targetPercent = parseInt(state.currentGrade.replace('%', ''));
      matchGrade = p.grade === state.currentGrade || p.condition_percent === targetPercent;
    }

    let matchTag = true;
    if (state.currentTag) {
      matchTag = p.tags && p.tags.includes(state.currentTag);
    }

    let matchSearch = true;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase().trim();
      const cls = getProductClassification(p).toLowerCase();
      matchSearch = p.name.toLowerCase().includes(q) ||
        p.series.toLowerCase().includes(q) ||
        cls.includes(q) ||
        (p.tags && p.tags.some(t => t.includes(q))) ||
        (p.features && p.features.some(f => f.toLowerCase().includes(q)));
    }

    return matchCat && matchClass && matchGrade && matchTag && matchSearch;
  });

  renderProducts();
}

function filterClassification(classType, btn) {
  state.currentClassification = classType;
  document.querySelectorAll('.class-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold');
    b.classList.add('bg-slate-100', 'text-slate-700', 'font-semibold');
  });
  if (btn) {
    btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold');
    btn.classList.remove('bg-slate-100', 'text-slate-700', 'font-semibold');
  }
  applyFilters();
}

function filterByNeed(tag) {
  resetFilters(false);
  state.currentTag = tag;
  applyFilters();
  const target = document.getElementById('products-section');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const labels = {
    cap2: 'Học sinh Cấp 2 (~220k – ~290k)',
    thpt: 'Ôn thi THPTQG & ĐGNL',
    sgkmoi: 'SGK Mới & Công nghệ QR (fx-880BTG)',
    phukien: 'Phụ kiện bảo vệ & Pin Maxell'
  };
  showToast(`Đang lọc máy phù hợp: ${labels[tag] || tag}`, 'info');
}

function filterCategory(cat, btn) {
  state.currentTag = null;
  state.currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold');
    b.classList.add('bg-slate-100', 'text-slate-700', 'font-semibold');
  });
  if (btn) {
    btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold');
    btn.classList.remove('bg-slate-100', 'text-slate-700', 'font-semibold');
  }
  applyFilters();
}

function filterGrade(grade, btn) {
  state.currentGrade = grade;
  document.querySelectorAll('.grade-btn').forEach(b => {
    b.classList.remove('border-blue-600', 'text-blue-700', 'bg-blue-50', 'font-bold');
    b.classList.add('border-slate-200', 'text-slate-600', 'font-semibold');
  });
  if (btn) {
    btn.classList.add('border-blue-600', 'text-blue-700', 'bg-blue-50', 'font-bold');
    btn.classList.remove('border-slate-200', 'text-slate-600', 'font-semibold');
  }
  applyFilters();
}

function sortProducts(order) {
  if (order === 'price-asc') state.filteredProducts.sort((a, b) => a.salePrice - b.salePrice);
  else if (order === 'price-desc') state.filteredProducts.sort((a, b) => b.salePrice - a.salePrice);
  else if (order === 'best-seller') state.filteredProducts.sort((a, b) => b.sold - a.sold);
  renderProducts();
}

function resetFilters(shouldRender = true) {
  state.currentCategory = 'all';
  state.currentClassification = 'all';
  state.currentGrade = 'all';
  state.currentTag = null;
  state.searchQuery = '';
  document.querySelectorAll('.cat-btn').forEach((b, i) => {
    if (i === 0) { b.classList.add('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold'); b.classList.remove('bg-slate-100', 'text-slate-700', 'font-semibold'); }
    else { b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold'); b.classList.add('bg-slate-100', 'text-slate-700', 'font-semibold'); }
  });
  document.querySelectorAll('.class-btn').forEach((b, i) => {
    if (i === 0) { b.classList.add('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold'); b.classList.remove('bg-slate-100', 'text-slate-700', 'font-semibold'); }
    else { b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold'); b.classList.add('bg-slate-100', 'text-slate-700', 'font-semibold'); }
  });
  document.querySelectorAll('.grade-btn').forEach((b, i) => {
    if (i === 0) { b.classList.add('border-blue-600', 'text-blue-700', 'bg-blue-50', 'font-bold'); b.classList.remove('border-slate-200', 'text-slate-600', 'font-semibold'); }
    else { b.classList.remove('border-blue-600', 'text-blue-700', 'bg-blue-50', 'font-bold'); b.classList.add('border-slate-200', 'text-slate-600', 'font-semibold'); }
  });
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const searchInputMobile = document.getElementById('search-input-mobile');
  if (searchInputMobile) searchInputMobile.value = '';
  if (shouldRender) applyFilters();
}
  state.currentCategory = 'all';
  state.currentGrade = 'all';
  state.currentTag = null;
  state.searchQuery = '';
  const searchDesk = document.getElementById('search-input');
  const searchMob = document.getElementById('search-input-mobile');
  if (searchDesk) searchDesk.value = '';
  if (searchMob) searchMob.value = '';

  document.querySelectorAll('.cat-btn').forEach((b, i) => {
    b.classList.toggle('bg-blue-600', i === 0);
    b.classList.toggle('text-white', i === 0);
    b.classList.toggle('bg-slate-100', i !== 0);
    b.classList.toggle('text-slate-700', i !== 0);
  });

  document.querySelectorAll('.grade-btn').forEach((b, i) => {
    b.classList.toggle('border-blue-600', i === 0);
    b.classList.toggle('bg-blue-50', i === 0);
    b.classList.toggle('text-blue-700', i === 0);
    b.classList.toggle('border-slate-200', i !== 0);
    b.classList.toggle('text-slate-600', i !== 0);
  });

  if (shouldRender) applyFilters();
}

// Cart Management
function addToCart(productId, openCheckoutDirectly = false) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else {
    state.cart.push({
      id: product.id,
      name: product.name,
      series: product.series,
      grade: product.grade,
      salePrice: product.salePrice,
      originalPrice: product.originalPrice,
      image: product.image,
      warranty: product.warranty,
      gift: product.gift,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();

  if (openCheckoutDirectly) openCheckoutModal();
  else {
    showToast(`Đã thêm "${product.series}" vào giỏ hàng!`, 'success');
    openCartDrawer();
  }
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
    showToast('Đã xóa máy khỏi giỏ hàng', 'info');
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Đã xóa sản phẩm khỏi giỏ', 'info');
}

function saveCart() {
  localStorage.setItem('abtn_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = totalQty;
    el.classList.toggle('hidden', totalQty === 0);
  });

  const subtotal = state.cart.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
  const discount = (state.appliedVoucher && VOUCHERS[state.appliedVoucher])
    ? VOUCHERS[state.appliedVoucher].discount
    : 0;
  const total = Math.max(0, subtotal - discount);

  const container = document.getElementById('cart-items-container');
  const drawerSubtotal = document.getElementById('drawer-subtotal');
  const drawerTotal = document.getElementById('drawer-total');
  const drawerDiscount = document.getElementById('drawer-discount');
  const drawerDiscountRow = document.getElementById('drawer-discount-row');

  if (drawerSubtotal) drawerSubtotal.textContent = formatMoney(subtotal);
  if (drawerTotal) drawerTotal.textContent = formatMoney(total);
  if (drawerDiscount && drawerDiscountRow) {
    if (discount > 0) {
      drawerDiscount.textContent = `-${formatMoney(discount)}`;
      drawerDiscountRow.classList.remove('hidden');
    } else {
      drawerDiscountRow.classList.add('hidden');
    }
  }

  if (container) {
    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="py-14 text-center text-slate-500">
          <div class="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl text-slate-400">
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
          <p class="font-bold text-slate-800 text-sm">Giỏ hàng của bạn đang trống</p>
          <p class="text-xs text-slate-400 mt-1">Chọn chiếc máy phù hợp để nhận kèm Ebook &amp; Pin Nhật nhé!</p>
          <button onclick="closeCartDrawer()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700">
            Xem Bảng Giá Máy
          </button>
        </div>
      `;
    } else {
      container.innerHTML = state.cart.map(item => `
        <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover shrink-0 bg-white border border-slate-200"/>
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-slate-900 truncate" title="${item.name}">${item.name}</h4>
            <div class="text-[11px] text-slate-500 mt-0.5">Độ mới: <strong class="text-blue-600">${item.grade}</strong></div>
            <div class="text-xs font-extrabold text-slate-900 mt-1">${formatMoney(item.salePrice)}</div>
          </div>
          <div class="flex items-center gap-1 shrink-0 bg-white border border-slate-200 rounded-lg p-1">
            <button onclick="updateCartQuantity('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-rose-600 text-xs">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-blue-600 text-xs">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1 text-xs" title="Xóa">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
  }
}

function applyVoucherCode() {
  const input = document.getElementById('voucher-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (VOUCHERS[code]) {
    state.appliedVoucher = code;
    showToast(`Đã áp dụng mã "${code}": ${VOUCHERS[code].desc}`, 'success');
    updateCartUI();
  } else {
    showToast('Mã giảm giá không hợp lệ!', 'error');
  }
}

// Quick View Modal
function openQuickView(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  const container = document.getElementById('quickview-content');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="w-full max-h-64 object-cover rounded-xl"/>
        <div class="mt-3 flex flex-wrap gap-2 justify-center text-[11px]">
          <span class="px-2.5 py-1 bg-white border border-slate-200 rounded-md font-semibold text-slate-700">
            <i class="fa-solid fa-shield-check text-emerald-600 mr-1"></i> Main Zin Bitex 100%
          </span>
          <span class="px-2.5 py-1 bg-white border border-slate-200 rounded-md font-semibold text-slate-700">
            <i class="fa-solid fa-box-open text-blue-600 mr-1"></i> Đồng kiểm COD
          </span>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center gap-2 mb-2">
          <span class="bg-blue-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">${product.series}</span>
          <span class="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">Độ mới ${product.grade}</span>
        </div>

        <h3 class="text-lg font-extrabold text-slate-900 leading-snug">${product.name}</h3>
        
        <div class="flex items-baseline gap-2.5 my-3">
          <span class="text-2xl font-extrabold text-blue-600">${formatMoney(product.salePrice)}</span>
          <span class="text-sm text-slate-400 line-through">${formatMoney(product.originalPrice)}</span>
          <span class="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded">-${product.savePercent}%</span>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4 space-y-1.5 text-xs text-slate-700">
          <div><strong>Phân loại máy:</strong> <span class="font-bold text-blue-700">${getProductClassification(product)}</span></div>
          <div class="grid grid-cols-3 gap-2 py-1.5 border-y border-slate-200/80 my-1.5 text-[11px] text-center">
            <div>
              <span class="block text-[10px] text-slate-400 font-semibold uppercase">Độ mới</span>
              <span class="font-extrabold text-blue-700">${product.condition_percent ? product.condition_percent + '%' : (product.grade || '100%')}</span>
            </div>
            <div class="border-x border-slate-200">
              <span class="block text-[10px] text-slate-400 font-semibold uppercase">Nắp máy</span>
              <span class="font-bold ${product.lid === true ? 'text-emerald-600' : product.lid === false ? 'text-slate-600' : 'text-amber-600'}">
                ${product.lid === true ? 'Có nắp zin' : product.lid === false ? 'Không kèm nắp' : 'Chờ xác nhận'}
              </span>
            </div>
            <div>
              <span class="block text-[10px] text-slate-400 font-semibold uppercase">Tem Bitex</span>
              <span class="font-bold ${product.seals === 2 ? 'text-blue-600' : product.seals === 1 ? 'text-indigo-600' : product.seals === 0 ? 'text-slate-600' : 'text-amber-600'}">
                ${product.seals === 2 ? '2 tem zin' : product.seals === 1 ? '1 tem zin' : product.seals === 0 ? '0 tem' : 'Chờ xác nhận'}
              </span>
            </div>
          </div>
          <div><strong>Bảo hành:</strong> ${product.warranty}</div>
          <div><strong>Màu sắc:</strong> ${product.color}</div>
          <div><strong>Quà tặng kèm:</strong> <span class="text-blue-700 font-semibold">${product.gift}</span></div>
        </div>

        <ul class="space-y-1.5 text-xs text-slate-600 mb-5">
          ${product.features.map(f => `
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-circle-check text-emerald-600 mt-0.5"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <div class="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mb-2">
          <button onclick="addToCart('${product.id}', true); closeQuickView();" class="py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs transition">
            Đặt Mua Ngay (COD)
          </button>
          <button onclick="addToCart('${product.id}', false); closeQuickView();" class="py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs transition">
            Thêm Vào Giỏ
          </button>
        </div>
        <a 
          href="https://www.threads.com/@_hgtuditto" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full py-2.5 bg-slate-900 hover:bg-black text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm"
        >
          <i class="fa-brands fa-threads text-sm"></i>
          <span>Nhắn shop trên Threads @_hgtuditto</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.add('hidden');
}

// Checkout Modal
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Giỏ hàng trống! Hãy chọn ít nhất 1 máy.', 'warning');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  const summaryContainer = document.getElementById('checkout-order-summary');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
  const discount = (state.appliedVoucher && VOUCHERS[state.appliedVoucher]) ? VOUCHERS[state.appliedVoucher].discount : 0;
  const total = Math.max(0, subtotal - discount);

  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="space-y-2 max-h-36 overflow-y-auto pr-1">
        ${state.cart.map(item => `
          <div class="flex justify-between items-center text-xs">
            <span class="text-slate-700 truncate pr-2 font-medium">${item.name} <strong class="text-blue-600">x${item.quantity}</strong></span>
            <span class="font-bold text-slate-900 shrink-0">${formatMoney(item.salePrice * item.quantity)}</span>
          </div>
        `).join('')}
      </div>
      <div class="pt-2.5 border-t border-slate-200 space-y-1 text-xs mt-2.5">
        <div class="flex justify-between text-slate-500"><span>Tạm tính:</span><span>${formatMoney(subtotal)}</span></div>
        ${discount > 0 ? `<div class="flex justify-between text-emerald-600 font-medium"><span>Mã giảm (${state.appliedVoucher}):</span><span>-${formatMoney(discount)}</span></div>` : ''}
        <div class="flex justify-between text-slate-500"><span>Vận chuyển:</span><span class="text-emerald-600 font-semibold">Miễn Phí (Đồng kiểm)</span></div>
        <div class="flex justify-between text-sm font-extrabold text-blue-600 pt-2 border-t border-slate-200">
          <span>Tổng thanh toán:</span><span>${formatMoney(total)}</span>
        </div>
        <div class="bg-blue-50 text-blue-800 text-[11px] font-bold p-2 rounded-lg text-center mt-2 border border-blue-200">
          Ship COD không cọc — Kiểm tra trước khi thanh toán — Bao test
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.remove('hidden');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
}

async function submitOrder(e) {
  e.preventDefault();
  const form = e.target;
  const fullName = form.fullName.value.trim();
  const phone = form.phone.value.trim();
  const address = form.address.value.trim();
  const province = form.province.value.trim();
  const notes = form.notes.value.trim();
  const selectedGift = form.freeGift ? form.freeGift.value : 'Bao da chống sốc';
  const paymentMethod = form.paymentMethod.value;

  if (!fullName || !phone || !address) {
    showToast('Vui lòng điền đủ Họ tên, SĐT và Địa chỉ!', 'error');
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
  const discount = (state.appliedVoucher && VOUCHERS[state.appliedVoucher]) ? VOUCHERS[state.appliedVoucher].discount : 0;
  const total = Math.max(0, subtotal - discount);

  const orderPayload = {
    customer: { fullName, phone, address, province, notes },
    items: state.cart,
    gift: selectedGift,
    pricing: { subtotal, discount, total, voucher: state.appliedVoucher },
    paymentMethod,
    channelSource: "Web Anh Ba Tu Nhien"
  };

  const submitBtn = document.getElementById('submit-order-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Đang gửi đơn...`;
  }

  let orderId = 'ABTN-' + Math.floor(100000 + Math.random() * 900000);
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    if (res.ok) {
      const result = await res.json();
      if (result.orderId) orderId = result.orderId;
    }
  } catch (_) {}

  // Also cache locally for static order lookup fallback
  const localOrders = JSON.parse(localStorage.getItem('abtn_local_orders') || '[]');
  localOrders.unshift({
    orderId,
    createdAt: new Date().toLocaleString('vi-VN'),
    status: 'Chờ xác nhận (COD / Zalo)',
    customerName: fullName,
    phone,
    items: state.cart,
    total
  });
  localStorage.setItem('abtn_local_orders', JSON.stringify(localOrders));

  state.cart = [];
  state.appliedVoucher = null;
  saveCart();
  updateCartUI();
  closeCheckoutModal();
  showOrderSuccessModal(orderId, orderPayload);

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i class="fa-solid fa-check-circle mr-2"></i> Hoàn Tất Đặt Hàng`;
  }
}

function showOrderSuccessModal(orderId, orderPayload) {
  const modal = document.getElementById('order-success-modal');
  const details = document.getElementById('order-success-details');
  if (!modal || !details) return;

  const zaloMsg = encodeURIComponent(
    `Chào Anh Ba Tự Nhiên! Em vừa đặt đơn #${orderId} trên Web.\n` +
    `- Người nhận: ${orderPayload.customer.fullName} (${orderPayload.customer.phone})\n` +
    `- Địa chỉ: ${orderPayload.customer.address}, ${orderPayload.customer.province}\n` +
    `- Sản phẩm: ${orderPayload.items.map(i => i.name + ' x' + i.quantity).join(', ')}\n` +
    `- Tổng: ${formatMoney(orderPayload.pricing.total)}`
  );

  details.innerHTML = `
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-900 text-xs mb-4">
      <div class="font-bold text-sm text-emerald-800 flex items-center gap-2 mb-1">
        <i class="fa-solid fa-circle-check text-emerald-600 text-base"></i> ĐẶT HÀNG THÀNH CÔNG!
      </div>
      <div>Mã đơn của bạn: <strong class="text-blue-700 font-mono text-sm">${orderId}</strong></div>
      <div class="text-slate-600 mt-1">Bạn có thể dùng mã đơn hoặc SĐT <strong>${orderPayload.customer.phone}</strong> để tra cứu đơn hàng ngay trên website.</div>
    </div>

    <div class="bg-slate-50 rounded-xl p-3.5 text-xs text-slate-700 space-y-1.5 mb-4 border border-slate-200">
      <div><strong>Người nhận:</strong> ${orderPayload.customer.fullName}</div>
      <div><strong>Địa chỉ:</strong> ${orderPayload.customer.address}, ${orderPayload.customer.province}</div>
      <div><strong>Quà tặng kèm:</strong> <span class="text-blue-600 font-semibold">${orderPayload.gift}</span></div>
      <div><strong>Tổng thanh toán:</strong> <span class="text-blue-600 font-extrabold text-sm">${formatMoney(orderPayload.pricing.total)}</span></div>
    </div>

    <div class="space-y-2">
      <a href="https://zalo.me/${state.config.zaloPhone}?text=${zaloMsg}" target="_blank" class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition">
        <i class="fa-solid fa-comment-dots"></i> Nhắn Zalo Báo Anh Ba Gửi Hàng Sớm
      </a>
      <a href="${state.config.facebookUrl}" target="_blank" class="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition">
        <i class="fa-brands fa-facebook-messenger"></i> Nhắn Qua Fanpage Facebook
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeOrderSuccessModal() {
  const modal = document.getElementById('order-success-modal');
  if (modal) modal.classList.add('hidden');
}

// Order & Warranty Lookup
async function lookupOrder(e) {
  e.preventDefault();
  const input = document.getElementById('lookup-input');
  const resultBox = document.getElementById('lookup-result');
  if (!input || !resultBox) return;

  const query = input.value.trim();
  if (!query) return;

  let matches = [];
  try {
    const res = await fetch(`/api/orders/lookup?q=${encodeURIComponent(query)}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) matches = data;
    }
  } catch (_) {}

  // Fallback 1: Read directly from static data/orders.json if on GitHub Pages / static host
  if (matches.length === 0) {
    try {
      const resFile = await fetch('data/orders.json');
      if (resFile.ok) {
        const fileOrders = await resFile.json();
        const qLow = query.toLowerCase();
        for (const o of fileOrders) {
          const oid = String(o.orderId || '').toLowerCase();
          const phone = String((o.customer && o.customer.phone) || o.phone || '').toLowerCase();
          if (qLow === oid || qLow === phone) {
            matches.push({
              orderId: o.orderId,
              createdAt: o.createdAt,
              status: o.status,
              customerName: (o.customer && o.customer.fullName) || o.customerName || 'Khách hàng',
              items: (o.items || []).map(i => ({ name: i.name, quantity: i.quantity, warranty: i.warranty })),
              total: (o.pricing && o.pricing.total) || o.total || 0
            });
          }
        }
      }
    } catch (_) {}
  }

  // Fallback 2: Check localStorage orders placed on this client
  if (matches.length === 0) {
    const localOrders = JSON.parse(localStorage.getItem('abtn_local_orders') || '[]');
    const qLow = query.toLowerCase();
    matches = localOrders.filter(o => {
      const oid = String(o.orderId || '').toLowerCase();
      const phone = String((o.customer && o.customer.phone) || o.phone || '').toLowerCase();
      return qLow === oid || qLow === phone;
    });
  }

  if (matches.length === 0) {
    resultBox.innerHTML = `
      <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
        Không tìm thấy đơn hàng khớp với "<strong>${query}</strong>". Nếu bạn mới đặt qua Facebook/TikTok, vui lòng nhắn Zalo để Anh Ba kiểm tra giúp nhé!
      </div>
    `;
    return;
  }

  resultBox.innerHTML = matches.map(m => `
    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5 mb-2 animate-fade-up">
      <div class="flex items-center justify-between">
        <strong class="font-mono text-blue-700">${m.orderId}</strong>
        <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px]">${m.status}</span>
      </div>
      <div class="text-slate-600">Khách hàng: <strong>${m.customerName || 'Khách hàng'}</strong> • Ngày đặt: ${m.createdAt}</div>
      <div class="text-slate-700">Sản phẩm: ${(m.items || []).map(i => `${i.name} (x${i.quantity}) - BH: ${i.warranty}`).join('; ')}</div>
      <div class="font-bold text-slate-900">Tổng tiền: ${formatMoney(m.total || 0)}</div>
    </div>
  `).join('');
}

// Casio Diagnostic & Demo Simulator
function initDiagnosticSimulator() {
  renderSimScreen('default');
}

function simPressKey(key) {
  state.simKeysPressed.push(key);
  const log = document.getElementById('sim-key-sequence');
  if (log) log.textContent = state.simKeysPressed.slice(-5).join(' + ');

  if (state.simKeysPressed.slice(-3).join(' ') === 'SHIFT 7 ON') {
    triggerDiagnosticMode();
    return;
  }

  if (key === 'ON') {
    state.simKeysPressed = ['ON'];
    renderSimScreen('default');
    showSimToast('Đã khởi động lại màn hình', 'info');
  } else if (key === 'SHIFT') {
    showSimToast('Đã bấm SHIFT (Tiếp tục bấm 7 rồi ON)', 'warning');
  } else if (key === 'AC') {
    renderSimScreen('default');
  } else if (key === 'TEST') {
    triggerDiagnosticMode();
  }
}

function triggerDiagnosticMode() {
  const screen = document.getElementById('casio-sim-screen');
  const alertBox = document.getElementById('diagnostic-alert');
  if (!screen) return;

  screen.className = 'casio-lcd w-full h-36 rounded-xl border-4 border-slate-950 overflow-hidden mb-4';
  screen.innerHTML = `
    <div class="h-full flex flex-col justify-between p-2.5 font-mono text-slate-900">
      <div class="text-[10px] flex justify-between border-b border-slate-800/30 pb-1 font-bold">
        <span>DIAGNOSTIC MODE</span>
        <span>CASIO OK</span>
      </div>
      <div class="my-auto text-center space-y-1">
        <div class="text-xs font-black tracking-widest bg-slate-900 text-emerald-200 py-1 rounded">
          ██████ PIXEL CHECK ██████
        </div>
        <div class="text-[11px] font-bold">ROM VER: fx-580VN X v1.04</div>
        <div class="text-[10px]">CHECKSUM: 4D8F [PASSED - MAIN ZIN]</div>
      </div>
      <div class="text-[9px] flex justify-between pt-1 border-t border-slate-800/30 font-semibold">
        <span>PRESS [9] TO EXIT</span>
        <span>BITEX GENUINE: OK</span>
      </div>
    </div>
  `;

  if (alertBox) {
    alertBox.innerHTML = `
      <div class="p-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-100 rounded-xl text-xs space-y-1 animate-fade-up">
        <div class="font-bold text-emerald-300 flex items-center gap-1.5">
          <i class="fa-solid fa-circle-check"></i> Test Thành Công Chế Độ Diagnostic Mode!
        </div>
        <p>Khi shipper giao máy tới, bạn bấm đúng <strong>SHIFT + 7 + ON</strong> như vậy. Nếu màn hình hiện đủ điểm ảnh và Checksum chuẩn thì 100% là máy Casio zin chính hãng.</p>
      </div>
    `;
  }
  showToast('Đã kích hoạt chế độ kiểm tra máy thật/giả!', 'success');
}

function renderSimScreen(mode) {
  const screen = document.getElementById('casio-sim-screen');
  if (!screen || mode !== 'default') return;

  screen.className = 'casio-lcd w-full h-36 rounded-xl border-4 border-slate-950 overflow-hidden mb-4';
  screen.innerHTML = `
    <div class="h-full flex flex-col justify-between p-2.5 font-mono text-slate-900">
      <div class="flex justify-between text-[9px] font-bold border-b border-slate-800/20 pb-0.5">
        <span>D   Math ▲</span>
        <span>fx-580VN X</span>
      </div>
      <div class="my-auto text-right pr-1">
        <div class="text-xs opacity-75">lim(x→∞) [Anh Ba Tự Nhiên]</div>
        <div class="text-base sm:text-lg font-extrabold mt-1">CHINH PHỤC ĐIỂM 9+_</div>
      </div>
      <div class="text-[9px] flex justify-between pt-0.5 border-t border-slate-800/20 font-semibold">
        <span>MAIN ZIN 100%</span>
        <span>BẤM: SHIFT 7 ON ĐỂ TEST</span>
      </div>
    </div>
  `;
}

function simDemoTrick(mode) {
  const screen = document.getElementById('casio-sim-screen');
  const alertBox = document.getElementById('diagnostic-alert');
  const seqLog = document.getElementById('sim-key-sequence');
  if (!screen) return;

  if (mode === 'cuctri') {
    if (seqLog) seqLog.textContent = 'MENU ➔ 9 ➔ 2 ➔ 3 ➔ =';
    showSimToast('Demo: Tìm Cực Trị fx-580VN X', 'info');
    screen.className = 'casio-lcd w-full h-36 rounded-xl border-4 border-slate-950 overflow-hidden mb-4';
    screen.innerHTML = `
      <div class="h-full flex flex-col justify-between p-2.5 font-mono text-slate-900">
        <div class="text-[9px] flex justify-between border-b border-slate-800/25 pb-0.5 font-bold">
          <span>EQUATION: ax³+bx²+cx+d</span>
          <span>fx-580VN X</span>
        </div>
        <div class="my-auto space-y-1 text-left">
          <div class="text-[10px] font-bold">Cực trị y = x³ - 3x² + 2:</div>
          <div class="text-xs font-extrabold bg-slate-900 text-emerald-200 px-2 py-0.5 rounded">
            CĐ: (0, 2) | CT: (2, -2)
          </div>
          <div class="text-[10px] font-bold">=> d(A,B) = √(2² + (-4)²) = 2√5</div>
        </div>
        <div class="text-[9px] flex justify-between pt-0.5 border-t border-slate-800/25 font-semibold">
          <span>GIẢI TRONG 5 GIÂY</span>
          <span>KHÔNG CẦN ĐẠO HÀM</span>
        </div>
      </div>
    `;
    if (alertBox) {
      alertBox.innerHTML = `
        <div class="p-3 bg-blue-950/70 border border-blue-500/40 text-blue-100 rounded-xl text-xs animate-fade-up">
          <strong class="text-amber-300 block mb-0.5">⚡ Mẹo tìm nhanh khoảng cách 2 cực trị (fx-580VN X)</strong>
          Máy tự động in thẳng tọa độ cực đại và cực tiểu chỉ sau vài thao tác bấm MENU 9 2 3.
        </div>
      `;
    }
  } else if (mode === 'thongke') {
    if (seqLog) seqLog.textContent = 'HOME ➔ Statistics ➔ 1-Var';
    showSimToast('Demo: Thống Kê fx-880BTG', 'info');
    screen.className = 'casio-lcd-880 w-full h-36 rounded-xl border-4 border-slate-950 overflow-hidden mb-4';
    screen.innerHTML = `
      <div class="h-full flex flex-col justify-between p-2.5 font-mono text-slate-900">
        <div class="text-[9px] flex justify-between border-b border-slate-500/30 pb-0.5 font-bold">
          <span>1-Var Results (4-Grayscale)</span>
          <span>fx-880BTG</span>
        </div>
        <div class="my-auto grid grid-cols-2 gap-x-3 text-[11px] font-bold">
          <div>x̄ = 8.425</div>
          <div>Q₁ = 7.50</div>
          <div>s²ₓ = 1.245</div>
          <div>Med = 8.50</div>
          <div>sₓ = 1.116</div>
          <div>Q₃ = 9.25</div>
        </div>
        <div class="text-[9px] flex justify-between pt-0.5 border-t border-slate-500/30 font-semibold">
          <span>CHUẨN GDPT 2018</span>
          <span>QR GRAPH READY</span>
        </div>
      </div>
    `;
    if (alertBox) {
      alertBox.innerHTML = `
        <div class="p-3 bg-indigo-950/70 border border-indigo-400/40 text-indigo-100 rounded-xl text-xs animate-fade-up">
          <strong class="text-amber-300 block mb-0.5">📊 Thế mạnh màn hình 4 cấp độ xám (fx-880BTG)</strong>
          Hiển thị trực quan Tứ phân vị, Phương sai &amp; Độ lệch chuẩn chuẩn theo đề thi mới nhất.
        </div>
      `;
    }
  }
}

function showSimToast(msg) {
  const log = document.getElementById('sim-status-text');
  if (log) log.textContent = msg;
}

// Trick Library Rendering & Filtering
function renderTricks() {
  const container = document.getElementById('tricks-grid');
  if (!container) return;

  container.innerHTML = state.filteredTricks.map(trick => {
    const is880 = trick.model.includes('880');
    const badgeStyle = is880
      ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
      : 'bg-blue-50 text-blue-700 border-blue-200';

    return `
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-md border ${badgeStyle}">
            ${trick.model}
          </span>
          <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
            ${trick.timeSaved}
          </span>
        </div>

        <h3 class="font-bold text-slate-900 text-sm leading-snug mb-2">
          ${trick.title}
        </h3>

        <div class="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600 mb-3">
          <strong class="text-slate-800">Ví dụ (${trick.sourceStyle}):</strong> ${trick.problem}
        </div>

        <div class="mb-3">
          <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Thao tác phím:</div>
          <div class="flex flex-wrap items-center gap-1">
            ${trick.steps.map((step, idx) => `
              <span class="px-2 py-0.5 bg-slate-900 text-amber-300 font-mono text-[10px] font-bold rounded">
                ${step}
              </span>
              ${idx < trick.steps.length - 1 ? '<span class="text-slate-400 text-[10px]">➔</span>' : ''}
            `).join('')}
          </div>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
          ${trick.explain}
        </p>

        <button 
          onclick="addToCart('${trick.recommendedProductId}', true)" 
          class="w-full py-2.5 bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white rounded-xl text-xs font-bold transition mt-auto flex items-center justify-center gap-1.5"
        >
          <i class="fa-solid fa-cart-shopping"></i> Chọn Máy ${trick.model}
        </button>
      </div>
    `;
  }).join('');
}

function filterTricks(filterVal, btn) {
  document.querySelectorAll('.trick-filter-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold');
    b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200', 'font-semibold');
  });
  if (btn) {
    btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm', 'font-bold');
    btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200', 'font-semibold');
  }

  state.filteredTricks = filterVal === 'all'
    ? [...state.tricks]
    : state.tricks.filter(t => t.model === filterVal || t.topic === filterVal);

  renderTricks();
}

// 10-Second Calculator Quiz
function runCalculatorQuiz() {
  const grade = document.getElementById('quiz-grade').value;
  const budget = document.getElementById('quiz-budget').value;
  const style = document.getElementById('quiz-style').value;
  const resultBox = document.getElementById('quiz-result');
  if (!resultBox) return;

  let recId = 'fx-580vnx-99';
  let reason = 'Casio fx-580VN X (99%) là lựa chọn cân bằng nhất cho thi THPTQG: bấm quen tay, tốc độ cao, giải mượt bất phương trình bậc 4 và Vector Oxyz.';

  if (budget === 'low' || grade === 'thcs') {
    recId = 'fx-570vnplus-99';
    reason = 'Casio fx-570VN Plus (99%) giá ~290k cực kỳ tiết kiệm, bền bỉ cho học sinh cấp 2 hoặc làm máy phụ dự phòng.';
  } else if (budget === 'high' && (style === 'modern' || grade === 'lop10')) {
    recId = 'combo-luoi-hoc-chinh-phuc-9';
    reason = 'Combo fx-880BTG (99%) + Cẩm nang & Bao da phù hợp hoàn hảo với chương trình SGK mới, có Bảng tính & Quét QR vẽ đồ thị tại nhà.';
  } else if (style === 'modern' || grade === 'lop10') {
    recId = 'fx-880btg-95';
    reason = 'Casio fx-880BTG (95%) giá ~530k (tiết kiệm ~360k) giúp bạn sở hữu đầy đủ công nghệ màn hình 4 cấp độ xám, Math Box & Thống kê mới.';
  } else if (budget === 'mid' && style === 'speed') {
    recId = 'fx-580vnx-95';
    reason = 'Casio fx-580VN X (95%) giá chỉ ~399k — main zin 100%, phím êm như mới, tối ưu chi phí cho sĩ tử cày đề.';
  }

  const product = state.products.find(p => p.id === recId) || state.products[0];
  if (!product) return;

  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `
    <div class="bg-white text-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 space-y-2.5 animate-fade-up">
      <div class="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider">
        <i class="fa-solid fa-bullseye mr-1"></i> Gợi ý chuẩn nhất cho bạn:
      </div>
      <div class="flex items-center gap-3">
        <img src="${product.image}" alt="${product.name}" class="w-14 h-14 rounded-xl object-cover shrink-0 bg-slate-100 border border-slate-200"/>
        <div class="min-w-0">
          <div class="font-bold text-xs text-slate-900 truncate">${product.name}</div>
          <div class="text-sm font-extrabold text-blue-600 mt-0.5">${formatMoney(product.salePrice)} <span class="text-[11px] text-slate-400 line-through font-normal">${formatMoney(product.originalPrice)}</span></div>
        </div>
      </div>
      <p class="text-[11px] text-slate-600 leading-relaxed">${reason}</p>
      <div class="grid grid-cols-2 gap-2 pt-1">
        <button onclick="addToCart('${product.id}', true)" class="py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[11px] font-bold transition">
          Đặt Mua Ngay
        </button>
        <button onclick="openQuickView('${product.id}')" class="py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-[11px] font-bold transition">
          Xem Chi Tiết
        </button>
      </div>
    </div>
  `;
}

// Toast Notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success'
    ? 'bg-emerald-600 text-white'
    : type === 'error'
      ? 'bg-rose-600 text-white'
      : type === 'warning'
        ? 'bg-amber-500 text-white'
        : 'bg-slate-900 text-white';

  const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-xmark' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-info-circle';

  toast.className = `${bg} px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-xs font-semibold transform transition-all duration-300 translate-y-3 opacity-0`;
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.remove('translate-y-3', 'opacity-0'), 10);
  setTimeout(() => {
    toast.classList.add('translate-y-3', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Exam Countdown
function initCountdown() {
  const timerEl = document.getElementById('exam-countdown');
  if (!timerEl) return;

  const currentYear = new Date().getFullYear();
  let targetDate = new Date(`${currentYear}-06-26T07:30:00`);
  if (new Date() > targetDate) targetDate = new Date(`${currentYear + 1}-06-26T07:30:00`);

  function update() {
    const diff = targetDate - new Date();
    if (diff <= 0) {
      timerEl.textContent = 'ĐANG TRONG KỲ THI THPTQG!';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    timerEl.innerHTML = `<span>${days}d</span>:<span>${String(hours).padStart(2, '0')}h</span>:<span>${String(mins).padStart(2, '0')}m</span>:<span>${String(secs).padStart(2, '0')}s</span>`;
  }

  update();
  setInterval(update, 1000);
}

// Event Listeners
function setupEventListeners() {
  const handleSearch = (e) => {
    state.searchQuery = e.target.value;
    applyFilters();
  };

  const searchDesk = document.getElementById('search-input');
  const searchMob = document.getElementById('search-input-mobile');
  if (searchDesk) searchDesk.addEventListener('input', handleSearch);
  if (searchMob) searchMob.addEventListener('input', handleSearch);

  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('quickview-modal')) closeQuickView();
    if (e.target === document.getElementById('checkout-modal')) closeCheckoutModal();
    if (e.target === document.getElementById('order-success-modal')) closeOrderSuccessModal();
  });
}

function formatMoney(amount) {
  if (amount == null || isNaN(amount)) return '~0đ';
  const num = Math.round(Number(amount));
  const formatted = Math.abs(num).toLocaleString('vi-VN');
  return num < 0 ? `-~${formatted}đ` : `~${formatted}đ`;
}
