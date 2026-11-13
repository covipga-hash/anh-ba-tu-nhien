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
  products: [...DEFAULT_PRODUCTS],
  filteredProducts: [...DEFAULT_PRODUCTS],
  tricks: [...DEFAULT_TRICKS],
  filteredTricks: [...DEFAULT_TRICKS],
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
  renderProducts();
  renderTricks();
  updateCartUI();
  setupEventListeners();
  initDiagnosticSimulator();
  initStudyHub();

  // Async refresh from server or static JSON
  await loadShopConfig();
  await loadProducts();
  await loadTricks();
  renderProducts();
  renderTricks();
});

// Shared JSON loader with API -> local file -> embedded fallback
async function fetchDataWithFallback(apiUrl, fileUrl, fallbackData) {
  const isStaticHost = window.location.hostname.includes('github.io') || window.location.protocol === 'file:';
  if (!isStaticHost && apiUrl) {
    try {
      const res = await fetch(apiUrl);
      if (res.ok) return await res.json();
    } catch (_) {}
  }
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



// ======================================================================
// KHU HỌC TẬP SĨ TỬ & SINH VIÊN (STUDY HUB - 100% LOCALSTORAGE & STATIC)
// ======================================================================

const DEFAULT_STUDY_DOCS = [
  {
    id: "doc-toan-thpt-01",
    title: "[Mẫu] 100 Công Thức Toán Giải Nhanh Bằng Casio fx-580VN X",
    subject: "Toán",
    level: "THPT",
    pages: 24,
    size: "1.8 MB",
    type: "PDF",
    badge: "Hot Sĩ Tử",
    desc: "Mẫu — sẽ thay bằng tài liệu thật do shop biên soạn. Tổng hợp mẹo bấm phương trình, hệ 4 ẩn, cực trị và ma trận.",
    outline: [
      "Chuyên đề 1: Giải phương trình & Bất phương trình bậc 4",
      "Chuyên đề 2: Kỹ thuật CALC 1000 & 0.001 cô lập tham số m",
      "Chuyên đề 3: Bấm tích phân & Số phức liên hợp",
      "Chuyên đề 4: Tọa độ Vector Oxyz trong 15 giây"
    ]
  },
  {
    id: "doc-toan-cap2-01",
    title: "[Mẫu] Hướng Dẫn Bấm Máy Cơ Bản Cho Học Sinh Lớp 6–9",
    subject: "Toán",
    level: "THCS",
    pages: 16,
    size: "1.2 MB",
    type: "PDF",
    badge: "Cấp 2 Dễ Học",
    desc: "Mẫu — sẽ thay bằng tài liệu thật. Rèn luyện bấm phân số, lũy thừa, căn bậc hai, tìm ƯCLN và BCNN cực chuẩn.",
    outline: [
      "Bài 1: Làm quen phím bấm và màn hình hiển thị tự nhiên",
      "Bài 2: Tính toán phân số, số thập phân vô hạn tuần hoàn",
      "Bài 3: Phân tích ra thừa số nguyên tố (phím FACT)",
      "Bài 4: Giải phương trình bậc nhất và hệ 2 ẩn"
    ]
  },
  {
    id: "doc-ly-thpt-01",
    title: "[Mẫu] Sổ Tay Bấm Máy Dao Động Cơ & Sóng Cơ Bằng Số Phức",
    subject: "Vật Lý",
    level: "THPT",
    pages: 18,
    size: "1.5 MB",
    type: "PDF",
    badge: "Bấm Nhanh 30s",
    desc: "Mẫu — sẽ thay bằng tài liệu thật. Kỹ thuật tổng hợp dao động điều hòa cùng tần số và viết phương trình sóng.",
    outline: [
      "Mục 1: Chuyển đổi Mode Radian và số phức CMPLX",
      "Mục 2: Tổng hợp 2 dao động lệch pha bất kỳ",
      "Mục 3: Viết biểu thức điện xoay chiều u, i bằng số phức",
      "Mục 4: Bài tập tự luyện kèm đáp số chi tiết"
    ]
  },
  {
    id: "doc-hoa-thpt-01",
    title: "[Mẫu] Phương Pháp Bấm Hệ 4 Ẩn Trong Bài Toán Hóa Học",
    subject: "Hóa Học",
    level: "THPT",
    pages: 14,
    size: "1.1 MB",
    type: "PDF",
    badge: "Đột Phá Điểm",
    desc: "Mẫu — sẽ thay bằng tài liệu thật. Ứng dụng giải hệ 4 phương trình 4 ẩn của fx-580VN X để xử lý bài toán vô cơ hỗn hợp.",
    outline: [
      "Dạng 1: Hệ phương trình bảo toàn electron và điện tích",
      "Dạng 2: Bài toán hỗn hợp kim loại tác dụng HNO3 / H2SO4 đặc",
      "Dạng 3: Bấm nhanh hệ bảo toàn khối lượng và nguyên tố",
      "Dạng 4: Bẫy thường gặp khi nhập hệ số 0"
    ]
  },
  {
    id: "doc-daihoc-01",
    title: "[Mẫu] Hướng Dẫn Tính Ma Trận & Định Thức Cho Sinh Viên",
    subject: "Đại Học",
    level: "Đại Học",
    pages: 28,
    size: "2.2 MB",
    type: "PDF",
    badge: "Toán Cao Cấp",
    desc: "Mẫu — sẽ thay bằng tài liệu thật. Hướng dẫn sinh viên Đại học tính định thức det(A), nhân ma trận 4x4, ma trận nghịch đảo.",
    outline: [
      "Phần 1: Khởi tạo và lưu ma trận MatA, MatB cấp đến 4x4",
      "Phần 2: Tính định thức Det và ma trận chuyển vị Trn",
      "Phần 3: Tìm ma trận nghịch đảo A⁻¹ giải hệ Cramer",
      "Phần 4: Lũy thừa ma trận và ứng dụng kinh tế"
    ]
  },
  {
    id: "doc-880-sgkmoi-01",
    title: "[Mẫu] Cẩm Nang Khám Phá fx-880BTG: Quét Mã QR & Spreadsheet",
    subject: "Toán",
    level: "THPT",
    pages: 22,
    size: "2.5 MB",
    type: "PDF",
    badge: "Chuẩn SGK Mới",
    desc: "Mẫu — sẽ thay bằng tài liệu thật. Hướng dẫn chi tiết tạo bảng tính Spreadsheet 45 dòng và quét mã QR xem đồ thị.",
    outline: [
      "Chương 1: Giao diện phím tròn và Menu biểu tượng mới",
      "Chương 2: Thiết lập bảng tính Spreadsheet cho bài toán lãi suất",
      "Chương 3: Quét QR hiển thị đồ thị và bảng biến thiên",
      "Chương 4: Thống kê 1 biến và 2 biến theo SGK mới"
    ]
  }
];

const DEFAULT_QUIZ_DATA = {
  testId: "casio-math-01",
  title: "Bài Kiểm Tra Kỹ Năng Bấm Máy Tính Casio & Toán Trọng Tâm",
  subject: "Môn Toán & Kỹ năng Casio (fx-580VN X, fx-880BTG)",
  grade: "Khối 10 – 12 & Ôn Thi Tốt Nghiệp THPT",
  durationMinutes: 15,
  badge: "Bài kiểm tra mẫu",
  description: "Đề luyện tập tổng hợp các kỹ thuật bấm máy giải nhanh phương trình, số phức, hình học Oxyz, bảng tính thống kê và đạo hàm / tích phân. Đề tự động xáo trộn câu hỏi và các đáp án A/B/C/D mỗi lần làm lại.",
  note: "Đây là bài kiểm tra mẫu dành cho học sinh rèn luyện kỹ năng bấm máy Casio. Dữ liệu câu hỏi được lưu trong file data/quiz.json, dễ dàng bổ sung đề thi mới mà không cần sửa code web.",
  questions: [
    {
      id: "q1",
      topic: "Phương trình bậc 3",
      question: "[Câu mẫu] Sử dụng máy tính Casio fx-580VN X, tìm nghiệm lớn nhất của phương trình: 2x³ - 5x² + x + 2 = 0",
      options: [
        { id: "q1_opt1", text: "x = 2", isCorrect: true },
        { id: "q1_opt2", text: "x = 1", isCorrect: false },
        { id: "q1_opt3", text: "x = -0.5", isCorrect: false },
        { id: "q1_opt4", text: "x = 3", isCorrect: false }
      ],
      explain: "Thao tác trên fx-580VN X: Bấm [MENU] -> [9] (Equation/Func) -> [2] (Polynomial) -> [3] (Bậc 3). Nhập hệ số: [2] [=] [-5] [=] [1] [=] [2] [=]. Máy hiển thị lần lượt 3 nghiệm thực: x₁ = 2, x₂ = 1, x₃ = -0.5. Nghiệm lớn nhất là x = 2."
    },
    {
      id: "q2",
      topic: "Số Phức",
      question: "[Câu mẫu] Cho số phức z = (3 - 2i)(1 + 4i). Số phức liên hợp z̄ có giá trị bằng:",
      options: [
        { id: "q2_opt1", text: "11 - 10i", isCorrect: true },
        { id: "q2_opt2", text: "11 + 10i", isCorrect: false },
        { id: "q2_opt3", text: "-11 + 10i", isCorrect: false },
        { id: "q2_opt4", text: "11 + 2i", isCorrect: false }
      ],
      explain: "Thao tác trên fx-580VN X: Vào chế độ số phức: [MENU] -> [2] (Complex). Nhập: (3 - 2i)(1 + 4i) [=], máy cho kết quả z = 11 + 10i. Số phức liên hợp z̄ đổi dấu phần ảo thành 11 - 10i (hoặc bấm [OPTN] -> [2] (Conjg) để máy tính trực tiếp)."
    },
    {
      id: "q3",
      topic: "Bảng tính fx-880BTG",
      question: "[Câu mẫu] Bảng tính (Spreadsheet) trên dòng máy Casio fx-880BTG có thể lưu trữ tối đa bao nhiêu dòng và cột dữ liệu?",
      options: [
        { id: "q3_opt1", text: "45 dòng và 5 cột (từ cột A đến E, 225 ô)", isCorrect: true },
        { id: "q3_opt2", text: "30 dòng và 4 cột (từ cột A đến D, 120 ô)", isCorrect: false },
        { id: "q3_opt3", text: "50 dòng và 6 cột (từ cột A đến F, 300 ô)", isCorrect: false },
        { id: "q3_opt4", text: "25 dòng và 3 cột (từ cột A đến C, 75 ô)", isCorrect: false }
      ],
      explain: "Tính năng Bảng tính Spreadsheet trên dòng máy Casio fx-880BTG hỗ trợ ma trận dữ liệu tối đa 45 dòng (hàng 1 đến 45) và 5 cột (cột A đến E), đủ để tính toán thống kê, lãi suất kép và dãy số truy hồi."
    },
    {
      id: "q4",
      topic: "Hình học Oxyz & Vector",
      question: "[Câu mẫu] Trong không gian Oxyz, cho hai vectơ u = (1, 2, -1) và v = (2, 0, 1). Tọa độ của vectơ tích có hướng [u, v] là:",
      options: [
        { id: "q4_opt1", text: "(2, -3, -4)", isCorrect: true },
        { id: "q4_opt2", text: "(-2, 3, 4)", isCorrect: false },
        { id: "q4_opt3", text: "(2, 3, -4)", isCorrect: false },
        { id: "q4_opt4", text: "(1, -2, 3)", isCorrect: false }
      ],
      explain: "Thao tác trên fx-580VN X: [MENU] -> [5] (Vector) -> Định nghĩa VctA kích thước 3 nhập (1, 2, -1) -> [OPTN] -> [1] định nghĩa VctB kích thước 3 nhập (2, 0, 1). Bấm [AC] -> [OPTN] [3] (VctA) [×] [OPTN] [4] (VctB) [=], kết quả hiển thị (2, -3, -4)."
    },
    {
      id: "q5",
      topic: "Đạo hàm tại 1 điểm",
      question: "[Câu mẫu] Cho hàm số f(x) = (2x - 1) / (x + 1). Sử dụng máy tính Casio, giá trị đạo hàm f'(1) bằng:",
      options: [
        { id: "q5_opt1", text: "0.75 (hoặc 3/4)", isCorrect: true },
        { id: "q5_opt2", text: "0.5 (hoặc 1/2)", isCorrect: false },
        { id: "q5_opt3", text: "1.25 (hoặc 5/4)", isCorrect: false },
        { id: "q5_opt4", text: "-0.75 (hoặc -3/4)", isCorrect: false }
      ],
      explain: "Thao tác trên fx-580VN X: Bấm [SHIFT] [∫] để gọi hàm tính đạo hàm d/dx. Nhập biểu thức: (2x - 1)/(x + 1), nhập vị trí x = 1, bấm [=]. Máy hiển thị ngay kết quả 0.75 = 3/4."
    },
    {
      id: "q6",
      topic: "Bất phương trình bậc 2",
      question: "[Câu mẫu] Tập nghiệm của bất phương trình -x² + 5x - 6 > 0 là khoảng nào sau đây?",
      options: [
        { id: "q6_opt1", text: "(2; 3)", isCorrect: true },
        { id: "q6_opt2", text: "(-∞; 2) ∪ (3; +∞)", isCorrect: false },
        { id: "q6_opt3", text: "[-3; -2]", isCorrect: false },
        { id: "q6_opt4", text: "(1; 6)", isCorrect: false }
      ],
      explain: "Thao tác trên fx-580VN X: Bấm [MENU] -> [A] (Inequality) -> [2] (Bậc 2) -> Chọn dạng [1] (ax² + bx + c > 0). Nhập hệ số [-1] [=] [5] [=] [-6] [=]. Máy hiển thị ngay tập nghiệm: 2 < x < 3, tức khoảng (2; 3)."
    },
    {
      id: "q7",
      topic: "Giá trị lớn nhất (TABLE)",
      question: "[Câu mẫu] Sử dụng chức năng Table (Bảng giá trị) trên Casio, giá trị lớn nhất M của hàm số y = -x³ + 3x + 1 trên đoạn [0; 2] bằng:",
      options: [
        { id: "q7_opt1", text: "M = 3", isCorrect: true },
        { id: "q7_opt2", text: "M = 1", isCorrect: false },
        { id: "q7_opt3", text: "M = 5", isCorrect: false },
        { id: "q7_opt4", text: "M = -1", isCorrect: false }
      ],
      explain: "Thao tác trên fx-580VN X: [MENU] -> [8] (Table). Nhập hàm f(x) = -x³ + 3x + 1 -> Bấm [=]. Start: [0], End: [2], Step: [0.2]. Cuộn xem cột f(x), giá trị lớn nhất đạt được là 3 tại x = 1."
    },
    {
      id: "q8",
      topic: "Tích phân xác định",
      question: "[Câu mẫu] Tính giá trị của tích phân I = ∫₁² (2x + 1/x) dx bằng máy tính Casio fx-580VN X:",
      options: [
        { id: "q8_opt1", text: "≈ 3.693 (chính xác là 3 + ln 2)", isCorrect: true },
        { id: "q8_opt2", text: "≈ 2.386 (chính xác là 2 + ln 2)", isCorrect: false },
        { id: "q8_opt3", text: "≈ 4.693 (chính xác là 4 + ln 2)", isCorrect: false },
        { id: "q8_opt4", text: "≈ 3.000", isCorrect: false }
      ],
      explain: "Thao tác trên fx-580VN X: Bấm phím [∫] -> Nhập biểu thức (2x + 1/x) -> Nhập cận dưới 1, cận trên 2 -> Bấm [=]. Máy tính trả về kết quả số thập phân 3.693147181... (nguyên hàm là x² + ln|x|, thay cận 2 và 1 được 3 + ln 2)."
    }
  ]
};

const DEFAULT_STUDY_QUIZ = DEFAULT_QUIZ_DATA.questions;

const DEFAULT_SAMPLE_REMINDERS = [
  {
    id: "rem_sample_1",
    title: "[Mẫu] Luyện bấm nhanh 1 đề thi thử môn Toán",
    date: new Date().toISOString().split('T')[0],
    time: "19:30",
    repeat: "daily",
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: "rem_sample_2",
    title: "[Mẫu] Ôn lại công thức tính tích phân & ma trận",
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: "20:45",
    repeat: "weekly",
    completed: false,
    createdAt: new Date().toISOString()
  }
];

const DEFAULT_SAMPLE_EXAMS = [
  {
    id: "exam_sample_hocky",
    name: "Kỳ thi Học Kỳ 1 (Năm học 2026–2027 - Mẫu)",
    targetDate: "2026-12-20T07:30:00"
  },
  {
    id: "exam_sample_dgnl",
    name: "Kỳ thi Đánh giá năng lực ĐHQG Đợt 1 (Mẫu)",
    targetDate: "2027-04-05T07:30:00"
  },
  {
    id: "exam_sample_lop10",
    name: "Kỳ thi Tuyển sinh Vào Lớp 10 (Mẫu)",
    targetDate: "2027-06-06T07:30:00"
  },
  {
    id: "exam_sample_thpt",
    name: "Kỳ thi Tốt nghiệp THPT 2027 (Dự kiến - Mẫu)",
    targetDate: "2027-06-25T07:30:00"
  }
];

const DEFAULT_SAMPLE_NOTES = [
  {
    id: "note_sample_1",
    date: new Date().toISOString().split('T')[0],
    title: "[Mẫu] Mục tiêu hôm nay: giải 30 phút toán bấm máy",
    content: "- Ôn lại cách bấm số phức liên hợp trên fx-580VN X\n- Bấm phương trình bậc 3 cẩn thận dấu âm\n- Nhớ kiểm tra lại nghiệm bằng tính năng CALC",
    priority: "important",
    done: false,
    updatedAt: new Date().toISOString()
  }
];

// Study Hub State
let studyHubState = {
  currentSubject: "all",
  currentLevel: "all",
  searchDocQuery: "",
  quizAnswers: {},
  quizChecked: false,
  reminders: [],
  exams: [],
  notes: []
};

// Main Initializer
function initStudyHub() {
  loadStudyReminders();
  loadUploadedDocs();
  loadStudyExams();
  loadStudyNotes();
  
  renderStudyDocs();
  renderStudyQuiz();
  renderStudyReminders();
  renderStudyExams();
  renderDailyNotes();
  
  loadLeaderboardData();
  loadMyPointsData();
  
  checkNotificationPermission();
  
  // Set default dates for form inputs
  const todayStr = new Date().toISOString().split('T')[0];
  const remDate = document.getElementById('rem-date');
  if (remDate) remDate.value = todayStr;
  const remTime = document.getElementById('rem-time');
  if (remTime) {
    const d = new Date();
    d.setHours(d.getHours() + 1);
    remTime.value = d.toTimeString().slice(0, 5);
  }
  const noteDate = document.getElementById('note-date');
  if (noteDate) noteDate.value = todayStr;
  
  // Start tick for exam countdowns
  setInterval(updateStudyExamsTick, 1000);
}

// Tab switcher
function switchStudyTab(tabKey, btn) {
  document.querySelectorAll('.study-tab-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
    b.classList.add('bg-slate-50', 'text-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
    btn.classList.remove('bg-slate-50', 'text-slate-700');
  }
  document.querySelectorAll('.study-tab-content').forEach(c => c.classList.add('hidden'));
  const target = document.getElementById(`study-tab-${tabKey}`);
  if (target) target.classList.remove('hidden');

  if (tabKey === 'leaderboard') {
    renderLeaderboard();
    renderMyPointsView();
  }
}

// ----------------------------------------------------
// 1. SÁCH ONLINE & TÀI LIỆU
// ----------------------------------------------------
function filterStudyDocSubject(subject, btn) {
  studyHubState.currentSubject = subject;
  document.querySelectorAll('.doc-subj-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-blue-600', 'text-white');
    btn.classList.remove('bg-slate-100', 'text-slate-700');
  }
  renderStudyDocs();
}

function filterStudyDocLevel(level) {
  studyHubState.currentLevel = level;
  renderStudyDocs();
}

function searchStudyDocs(query) {
  studyHubState.searchDocQuery = (query || '').toLowerCase().trim();
  renderStudyDocs();
}

function renderStudyDocs() {
  const container = document.getElementById('study-docs-grid');
  if (!container) return;

  const cat = studyHubState.docCategory || 'library';
  let sourceList = [];
  let isMyDocs = false;
  let isPending = false;
  let isCommunity = false;

  if (cat === 'library') {
    sourceList = DEFAULT_STUDY_DOCS;
  } else if (cat === 'community') {
    sourceList = DEFAULT_COMMUNITY_DOCS;
    isCommunity = true;
  } else if (cat === 'my_docs') {
    sourceList = studyHubState.myDocs || [];
    isMyDocs = true;
  } else if (cat === 'pending') {
    sourceList = studyHubState.pendingDocs || [];
    isPending = true;
  }

  // Filter by subject, level, search query
  const filtered = sourceList.filter(doc => {
    const matchSubj = studyHubState.currentSubject === 'all' || doc.subject === studyHubState.currentSubject;
    const matchLevel = studyHubState.currentLevel === 'all' || doc.level === studyHubState.currentLevel;
    const matchQuery = !studyHubState.searchDocQuery || 
      doc.title.toLowerCase().includes(studyHubState.searchDocQuery) ||
      (doc.desc && doc.desc.toLowerCase().includes(studyHubState.searchDocQuery)) ||
      (doc.author && doc.author.toLowerCase().includes(studyHubState.searchDocQuery));
    return matchSubj && matchLevel && matchQuery;
  });

  if (filtered.length === 0) {
    let emptyMsg = "Không tìm thấy tài liệu phù hợp";
    let emptySub = "Thử chọn môn khác hoặc đổi từ khóa tìm kiếm";
    if (isMyDocs) {
      emptyMsg = 'Mục "Tài liệu của tôi" chưa có file nào tải lên';
      emptySub = "Bấm nút '+ Tải Lên / Đóng Góp File' ở trên để lưu tài liệu học tập vào máy dùng riêng.";
    } else if (isPending) {
      emptyMsg = 'Danh sách "Chờ duyệt" chưa có tài liệu nào';
      emptySub = "Khi bạn gửi đóng góp tài liệu cho shop duyệt, thông tin sẽ hiển thị tại đây.";
    }

    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200">
        <i class="fa-solid fa-folder-open text-3xl text-slate-300 mb-2"></i>
        <h4 class="text-sm font-bold text-slate-800">${emptyMsg}</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-md mx-auto">${emptySub}</p>
        ${(isMyDocs || isPending) ? `
          <button onclick="openUploadDocModal('${isPending ? 'contrib' : 'private'}')" class="mt-3 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-plus"></i> ${isPending ? 'Đóng Góp Tài Liệu Mới' : 'Tải Lên File Của Bạn'}
          </button>
        ` : ''}
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(doc => {
    let subjColor = 'bg-blue-100 text-blue-800 border-blue-200';
    if (doc.subject === 'Vật Lý') subjColor = 'bg-amber-100 text-amber-800 border-amber-200';
    if (doc.subject === 'Hóa Học') subjColor = 'bg-purple-100 text-purple-800 border-purple-200';
    if (doc.subject === 'Đại Học') subjColor = 'bg-indigo-100 text-indigo-800 border-indigo-200';

    if (isMyDocs) {
      return `
        <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-emerald-300 shadow-sm transition flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2.5">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${subjColor}">
                  ${doc.subject}
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  ${doc.level}
                </span>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <i class="fa-solid fa-lock text-[9px]"></i> Tài liệu của tôi (Trên máy bạn)
              </span>
            </div>

            <h4 class="text-sm font-extrabold text-slate-900 leading-snug mb-1.5" title="${doc.title}">
              ${doc.title}
            </h4>

            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
              ${doc.desc}
            </p>

            <div class="flex items-center gap-3 text-[11px] text-slate-400 mb-4 pb-3 border-b border-slate-100 flex-wrap">
              <span><i class="fa-regular fa-file text-blue-500 mr-1"></i> ${doc.fileName || 'Tài liệu'}</span>
              <span><i class="fa-solid fa-hard-drive text-emerald-500 mr-1"></i> ${doc.fileSize || 'N/A'}</span>
              <span><i class="fa-regular fa-calendar text-slate-400 mr-1"></i> ${doc.createdAt || 'Gần đây'}</span>
            </div>
          </div>

          <div class="flex items-center gap-2 pt-1">
            <button onclick="viewLocalUploadedDoc('my_docs', '${doc.id}')" class="flex-1 py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-regular fa-eye"></i>
              <span>Xem Lại File</span>
            </button>
            <button onclick="downloadUploadedDoc('my_docs', '${doc.id}')" class="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm" title="Tải về máy">
              <i class="fa-solid fa-download"></i>
            </button>
            <button onclick="deleteUploadedDoc('my_docs', '${doc.id}')" class="py-2 px-2.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-500 rounded-xl text-xs font-semibold transition" title="Xóa tài liệu">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }

    if (isPending) {
      return `
        <div class="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/90 shadow-sm transition flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2.5">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${subjColor}">
                  ${doc.subject}
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  ${doc.level}
                </span>
              </div>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
                <i class="fa-solid fa-hourglass-half text-[9px]"></i> Đang chờ shop duyệt
              </span>
            </div>

            <h4 class="text-sm font-extrabold text-slate-900 leading-snug mb-1.5">
              ${doc.title}
            </h4>

            <div class="text-[11px] text-slate-500 mb-2">
              <span>Người đóng góp: <strong>${doc.author || 'Học sinh'}</strong></span>
            </div>

            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
              ${doc.desc}
            </p>

            <div class="p-2.5 bg-amber-50 rounded-xl text-[11px] text-amber-900 border border-amber-200/70 mb-3.5">
              <i class="fa-solid fa-circle-info mr-1 text-amber-600"></i>
              File đã lưu trên máy bạn. Hãy gửi tin nhắn qua Zalo hoặc Threads để shop duyệt đăng công khai!
            </div>
          </div>

          <div class="flex items-center gap-2 pt-1">
            <button onclick="resendPendingDoc('${doc.id}')" class="flex-1 py-2 px-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-paper-plane"></i>
              <span>Gửi Tin Nhắn Duyệt</span>
            </button>
            <button onclick="viewLocalUploadedDoc('pending_docs', '${doc.id}')" class="py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition" title="Xem trước file">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button onclick="deleteUploadedDoc('pending_docs', '${doc.id}')" class="py-2 px-2.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-500 rounded-xl text-xs font-semibold transition" title="Hủy đóng góp">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }

    if (isCommunity) {
      return `
        <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-indigo-300 shadow-sm transition flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2.5">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${subjColor}">
                  ${doc.subject}
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  ${doc.level}
                </span>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                <i class="fa-solid fa-circle-check text-[9px] mr-0.5"></i> Tài Liệu Đóng Góp (Đã duyệt)
              </span>
            </div>

            <h4 class="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-indigo-600 transition mb-1.5">
              ${doc.title}
            </h4>

            <div class="text-[11px] text-slate-500 mb-2">
              <i class="fa-solid fa-user-pen text-indigo-500 mr-1"></i> Đóng góp bởi: <strong class="text-slate-800">${doc.author}</strong>
            </div>

            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
              ${doc.desc}
            </p>

            <div class="flex items-center gap-3 text-[11px] text-slate-400 mb-4 pb-3 border-b border-slate-100">
              <span><i class="fa-regular fa-file-pdf text-rose-500 mr-1"></i> ${doc.type}</span>
              <span><i class="fa-solid fa-book-open text-blue-500 mr-1"></i> ${doc.pages} trang</span>
              <span><i class="fa-solid fa-hard-drive text-emerald-500 mr-1"></i> ${doc.size}</span>
            </div>
          </div>

          <div class="flex items-center gap-2 pt-1">
            <button onclick="openDocPreview('${doc.id}')" class="flex-1 py-2 px-3 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-regular fa-eye"></i>
              <span>Xem Mục Lục</span>
            </button>
            <button onclick="downloadStudyDoc('${doc.id}')" class="py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm" title="Tải tài liệu">
              <i class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      `;
    }

    // Default library sample doc card
    return `
      <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${subjColor}">
                ${doc.subject}
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                ${doc.level}
              </span>
            </div>
            <span class="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
              ${doc.badge}
            </span>
          </div>

          <h4 class="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition mb-2">
            ${doc.title}
          </h4>

          <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
            ${doc.desc}
          </p>

          <div class="flex items-center gap-3 text-[11px] text-slate-400 mb-4 pb-3 border-b border-slate-100">
            <span><i class="fa-regular fa-file-pdf text-rose-500 mr-1"></i> ${doc.type}</span>
            <span><i class="fa-solid fa-book-open text-blue-500 mr-1"></i> ${doc.pages} trang</span>
            <span><i class="fa-solid fa-hard-drive text-emerald-500 mr-1"></i> ${doc.size}</span>
          </div>
        </div>

        <div class="flex items-center gap-2 pt-1">
          <button onclick="openDocPreview('${doc.id}')" class="flex-1 py-2 px-3 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-regular fa-eye"></i>
            <span>Xem Mục Lục</span>
          </button>
          <button onclick="downloadStudyDoc('${doc.id}')" class="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm" title="Tải tài liệu">
            <i class="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}


function openDocPreview(docId) {
  const allDocs = [...DEFAULT_STUDY_DOCS, ...(typeof DEFAULT_COMMUNITY_DOCS !== 'undefined' ? DEFAULT_COMMUNITY_DOCS : [])];
  const doc = allDocs.find(d => d.id === docId);
  if (!doc) return;

  const modal = document.getElementById('doc-preview-modal');
  const content = document.getElementById('doc-preview-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="flex items-center gap-2 mb-2">
      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">${doc.subject}</span>
      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">${doc.level}</span>
      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Mẫu — sẽ thay bằng tài liệu thật</span>
    </div>

    <h3 class="text-base font-extrabold text-slate-900 leading-snug mb-2">
      ${doc.title}
    </h3>

    <p class="text-xs text-slate-600 leading-relaxed mb-4">
      ${doc.desc}
    </p>

    <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-4">
      <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
        <i class="fa-solid fa-list-check text-blue-600 mr-1"></i> Tóm tắt mục lục chuyên đề:
      </h4>
      <ul class="space-y-2 text-xs text-slate-700">
        ${doc.outline.map(item => `
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-check text-emerald-600 text-xs mt-1 shrink-0"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 mb-4 flex items-center gap-2">
      <i class="fa-solid fa-info-circle text-amber-600 shrink-0"></i>
      <span>File tài liệu PDF chính thức đang được chuẩn bị. Khi hoàn thành bạn có thể tải trọn bộ miễn phí tại đây!</span>
    </div>

    <div class="flex items-center gap-2">
      <button onclick="downloadStudyDoc('${doc.id}')" class="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm">
        <i class="fa-solid fa-download"></i>
        <span>Nhận Tài Liệu Ngay</span>
      </button>
      <button onclick="closeDocPreview()" class="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition">
        Đóng
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeDocPreview() {
  const modal = document.getElementById('doc-preview-modal');
  if (modal) modal.classList.add('hidden');
}

function downloadStudyDoc(docId) {
  const doc = DEFAULT_STUDY_DOCS.find(d => d.id === docId);
  const title = doc ? doc.title : "Tài liệu";
  showToast(`[Mẫu] Đang kết nối tải "${title}". Cơ và shop sẽ cập nhật link file chính thức sớm nhất!`, "info");
  addMyPoints('download', `Tải tài liệu: ${title}`, 5, { docId: docId });
}

// ----------------------------------------------------
// 2. BÀI TẬP ÔN TẬP BẤM MÁY & BÀI KIỂM TRA (EXAM ENGINE)
// ----------------------------------------------------

let examState = {
  meta: { ...DEFAULT_QUIZ_DATA },
  rawQuestions: [...DEFAULT_QUIZ_DATA.questions],
  currentQuestions: [],
  answers: {},
  submitted: false,
  score10: "0.0",
  correctCount: 0,
  totalCount: 0,
  timeRemainingSec: 15 * 60,
  timerInterval: null,
  history: []
};

// Utility: Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Format seconds into MM:SS
function formatExamTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Load exam data from API / data/quiz.json / fallback
async function loadExamData() {
  try {
    const res = await fetch('/api/quiz');
    if (res.ok) {
      const data = await res.json();
      if (data && data.questions && data.questions.length > 0) {
        examState.meta = data;
        examState.rawQuestions = data.questions;
      }
    } else {
      const resStatic = await fetch('data/quiz.json');
      if (resStatic.ok) {
        const dataStatic = await resStatic.json();
        if (dataStatic && dataStatic.questions && dataStatic.questions.length > 0) {
          examState.meta = dataStatic;
          examState.rawQuestions = dataStatic.questions;
        }
      }
    }
  } catch (err) {
    console.warn("Could not fetch quiz.json, using DEFAULT_QUIZ_DATA fallback", err);
  }

  loadExamHistory();
  initExamSession(true); // default shuffle questions & options
}

// Load & Save History in localStorage
function loadExamHistory() {
  try {
    const raw = localStorage.getItem('abtn_quiz_history');
    examState.history = raw ? JSON.parse(raw) : [];
  } catch (_) {
    examState.history = [];
  }
  updateExamHistoryBadge();
}

function saveExamHistory() {
  try {
    localStorage.setItem('abtn_quiz_history', JSON.stringify(examState.history));
  } catch (_) {}
  updateExamHistoryBadge();
}

function updateExamHistoryBadge() {
  const badge = document.getElementById('exam-history-count-badge');
  if (badge) {
    badge.textContent = examState.history.length;
  }
}

// Initialize Exam Session
function initExamSession(shouldShuffle = true) {
  // Clear any existing timer
  if (examState.timerInterval) {
    clearInterval(examState.timerInterval);
    examState.timerInterval = null;
  }

  // Deep clone and shuffle
  if (shouldShuffle) {
    examState.currentQuestions = shuffleArray(examState.rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  } else {
    examState.currentQuestions = examState.rawQuestions.map(q => ({
      ...q,
      options: [...q.options]
    }));
  }

  examState.answers = {};
  examState.submitted = false;
  examState.score10 = "0.0";
  examState.correctCount = 0;
  examState.totalCount = examState.currentQuestions.length;

  const durationMin = (examState.meta && examState.meta.durationMinutes) || 15;
  examState.timeRemainingSec = durationMin * 60;

  startExamTimer();

  renderExamHeader();
  renderExamProgress();
  renderExamQuestions();

  const resultBanner = document.getElementById('exam-result-banner');
  if (resultBanner) resultBanner.classList.add('hidden');
}

// Timer Functions
function startExamTimer() {
  if (examState.timerInterval) clearInterval(examState.timerInterval);
  updateTimerDisplay();

  examState.timerInterval = setInterval(() => {
    if (examState.submitted) {
      clearInterval(examState.timerInterval);
      return;
    }

    examState.timeRemainingSec--;
    updateTimerDisplay();

    if (examState.timeRemainingSec <= 0) {
      clearInterval(examState.timerInterval);
      submitExam(true); // Auto-submit when time is up!
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById('exam-timer-display');
  const timerBox = document.getElementById('exam-timer-box');
  if (!display) return;

  display.textContent = formatExamTime(Math.max(0, examState.timeRemainingSec));

  if (examState.timeRemainingSec <= 120 && examState.timeRemainingSec > 0) {
    display.classList.remove('text-amber-300');
    display.classList.add('text-rose-400');
    if (timerBox) timerBox.classList.add('border-rose-500/80', 'animate-pulse');
  } else {
    display.classList.remove('text-rose-400');
    display.classList.add('text-amber-300');
    if (timerBox) timerBox.classList.remove('border-rose-500/80', 'animate-pulse');
  }
}

// Render Header Info
function renderExamHeader() {
  const titleEl = document.getElementById('exam-title-text');
  const descEl = document.getElementById('exam-desc-text');
  const subjEl = document.getElementById('exam-subject-badge');
  const gradeEl = document.getElementById('exam-grade-badge');
  const badgeEl = document.getElementById('exam-badge-tag');

  if (titleEl && examState.meta && examState.meta.title) titleEl.textContent = examState.meta.title;
  if (descEl && examState.meta && examState.meta.description) descEl.textContent = examState.meta.description;
  if (subjEl && examState.meta && examState.meta.subject) subjEl.textContent = examState.meta.subject;
  if (gradeEl && examState.meta && examState.meta.grade) gradeEl.textContent = examState.meta.grade;
  if (badgeEl && examState.meta && examState.meta.badge) badgeEl.textContent = examState.meta.badge;
}

// Render Progress and Fast Navigation Jump Pills
function renderExamProgress() {
  const total = examState.currentQuestions.length;
  const answeredCount = Object.keys(examState.answers).length;
  const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  const bar = document.getElementById('exam-progress-bar');
  const text = document.getElementById('exam-progress-text');
  if (bar) bar.style.width = `${percent}%`;
  if (text) text.textContent = `${answeredCount}/${total} câu (${percent}%)`;

  const pillsContainer = document.getElementById('exam-nav-pills');
  if (!pillsContainer) return;

  pillsContainer.innerHTML = examState.currentQuestions.map((q, idx) => {
    const isAnswered = examState.answers[q.id] !== undefined;
    let pillStyle = "bg-slate-100 text-slate-600 hover:bg-slate-200";

    if (examState.submitted) {
      const userOptId = examState.answers[q.id];
      const userOpt = q.options.find(o => o.id === userOptId);
      const isCorrect = userOpt && userOpt.isCorrect === true;
      pillStyle = isCorrect ? "bg-emerald-600 text-white font-black" : "bg-rose-500 text-white font-black";
    } else if (isAnswered) {
      pillStyle = "bg-blue-600 text-white font-black shadow-sm";
    }

    return `
      <button 
        type="button" 
        onclick="scrollToExamQuestion(${idx})"
        class="w-7 h-7 rounded-xl text-xs flex items-center justify-center transition active:scale-95 ${pillStyle}"
        title="Câu ${idx + 1}: ${isAnswered ? 'Đã chọn' : 'Chưa làm'}"
      >
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function scrollToExamQuestion(idx) {
  const el = document.getElementById(`exam-q-${idx}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('ring-2', 'ring-blue-500');
    setTimeout(() => el.classList.remove('ring-2', 'ring-blue-500'), 1200);
  }
}

// Render Questions List
function renderExamQuestions() {
  const container = document.getElementById('study-quiz-list');
  if (!container) return;

  const letters = ['A', 'B', 'C', 'D', 'E'];

  container.innerHTML = examState.currentQuestions.map((q, qIdx) => {
    const selectedOptId = examState.answers[q.id];
    const isAnswered = selectedOptId !== undefined;
    const isSubmitted = examState.submitted;

    let isCorrectAnswer = false;
    if (isSubmitted) {
      const userOpt = q.options.find(o => o.id === selectedOptId);
      isCorrectAnswer = userOpt && userOpt.isCorrect === true;
    }

    return `
      <div id="exam-q-${qIdx}" class="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm transition">
        <!-- Question Header -->
        <div class="flex items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="w-7 h-7 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-black shrink-0">
              ${qIdx + 1}
            </span>
            <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700">
              ${q.topic || 'Toán học'}
            </span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
              Câu mẫu
            </span>
          </div>

          ${isSubmitted ? `
            <span class="text-xs font-bold ${isCorrectAnswer ? 'text-emerald-600 bg-emerald-50 border border-emerald-200' : 'text-rose-600 bg-rose-50 border border-rose-200'} px-2.5 py-1 rounded-xl flex items-center gap-1.5 shrink-0">
              <i class="fa-solid ${isCorrectAnswer ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
              <span>${isCorrectAnswer ? 'Đúng (+1.25đ)' : 'Chưa đúng'}</span>
            </span>
          ` : `
            <span class="text-[11px] font-bold ${isAnswered ? 'text-blue-600' : 'text-slate-400'} flex items-center gap-1">
              <i class="fa-solid ${isAnswered ? 'fa-circle-check' : 'fa-circle-dot'}"></i>
              <span class="hidden sm:inline">${isAnswered ? 'Đã chọn' : 'Chưa chọn'}</span>
            </span>
          `}
        </div>

        <!-- Question Prompt -->
        <h4 class="text-sm sm:text-base font-extrabold text-slate-900 mb-4 leading-relaxed">
          ${q.question}
        </h4>

        <!-- Options Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          ${q.options.map((opt, optIdx) => {
            const isThisSelected = selectedOptId === opt.id;
            const letter = letters[optIdx] || '?';

            let btnStyle = "bg-slate-50 hover:bg-blue-50/70 border-slate-200 text-slate-800";
            let letterStyle = isThisSelected ? "bg-blue-600 text-white font-bold" : "bg-white text-slate-600 border border-slate-200";

            if (isSubmitted) {
              if (opt.isCorrect) {
                btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500";
                letterStyle = "bg-emerald-600 text-white font-bold";
              } else if (isThisSelected && !opt.isCorrect) {
                btnStyle = "bg-rose-50 border-rose-400 text-rose-900 font-bold line-through";
                letterStyle = "bg-rose-600 text-white font-bold";
              } else {
                btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                letterStyle = "bg-slate-100 text-slate-400 border border-slate-200";
              }
            } else if (isThisSelected) {
              btnStyle = "bg-blue-50 border-blue-600 text-blue-950 font-bold shadow-sm ring-1 ring-blue-600";
            }

            return `
              <button
                type="button"
                onclick="selectExamAnswer('${q.id}', '${opt.id}')"
                class="text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition flex items-center gap-3 active:scale-[0.99] ${btnStyle}"
              >
                <span class="w-6 h-6 rounded-lg ${letterStyle} flex items-center justify-center text-xs shrink-0 transition">
                  ${letter}
                </span>
                <span class="leading-snug">${opt.text}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Explanation (Shown after submit) -->
        ${isSubmitted ? `
          <div class="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl text-xs text-blue-950 leading-relaxed animate-fadeIn">
            <div class="font-extrabold text-blue-900 flex items-center gap-1.5 mb-1.5">
              <i class="fa-solid fa-lightbulb text-amber-500 text-sm"></i>
              <span>Hướng Dẫn Bấm Máy Tính Casio Chi Tiết:</span>
            </div>
            <p class="text-blue-900 font-medium">${q.explain}</p>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// Select Answer for a Question
function selectExamAnswer(qId, optId) {
  if (examState.submitted) return; // Locked once submitted

  examState.answers[qId] = optId;
  renderExamProgress();
  renderExamQuestions();
}

// Shuffle & Restart Exam
function shuffleAndRestartExam() {
  initExamSession(true);
  showToast("Đã xáo trộn thứ tự câu hỏi và đáp án A/B/C/D! Thời gian được đếm lại từ đầu.", "success");
}

// Reset Current Exam Answers
function resetCurrentExamAnswers() {
  examState.answers = {};
  examState.submitted = false;
  
  const durationMin = (examState.meta && examState.meta.durationMinutes) || 15;
  examState.timeRemainingSec = durationMin * 60;
  startExamTimer();

  renderExamProgress();
  renderExamQuestions();

  const banner = document.getElementById('exam-result-banner');
  if (banner) banner.classList.add('hidden');

  showToast("Đã xóa các câu trả lời để làm lại đề này!", "info");
}

// Submit Exam & Grade
function submitExam(isAuto = false) {
  if (examState.submitted) return;

  if (examState.timerInterval) {
    clearInterval(examState.timerInterval);
    examState.timerInterval = null;
  }

  examState.submitted = true;
  const total = examState.currentQuestions.length;
  let correct = 0;
  let answered = 0;

  examState.currentQuestions.forEach(q => {
    const userOptId = examState.answers[q.id];
    if (userOptId !== undefined) {
      answered++;
      const userOpt = q.options.find(o => o.id === userOptId);
      if (userOpt && userOpt.isCorrect === true) {
        correct++;
      }
    }
  });

  examState.correctCount = correct;
  examState.totalCount = total;
  const score = total > 0 ? ((correct / total) * 10).toFixed(1) : "0.0";
  examState.score10 = score;

  const durationMin = (examState.meta && examState.meta.durationMinutes) || 15;
  const timeTakenSec = Math.max(0, (durationMin * 60) - examState.timeRemainingSec);
  const timeTakenFormatted = formatExamTime(timeTakenSec);

  // Save to History
  const historyEntry = {
    id: 'att_' + Date.now(),
    title: (examState.meta && examState.meta.title) || "Bài Kiểm Tra Bấm Máy Casio",
    subject: (examState.meta && examState.meta.subject) || "Toán Casio",
    timestamp: new Date().toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' }),
    score10: score,
    correctCount: correct,
    totalCount: total,
    answeredCount: answered,
    timeTaken: timeTakenFormatted,
    isAutoSubmitted: isAuto
  };

  examState.history.unshift(historyEntry);
  if (examState.history.length > 25) examState.history = examState.history.slice(0, 25);
  saveExamHistory();

  // Add leaderboard points: +10 base + score on 10-point scale
  const examScoreBonus = Math.round(parseFloat(score));
  const totalExamPts = 10 + examScoreBonus;
  addMyPoints('exam', `Làm bài kiểm tra Casio (${score}/10đ)`, totalExamPts, { score: score });

  // Render Result Banner & Questions
  renderExamResultBanner(score, correct, total, answered, timeTakenFormatted, isAuto);
  renderExamProgress();
  renderExamQuestions();

  const banner = document.getElementById('exam-result-banner');
  if (banner) {
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  if (isAuto) {
    showToast(`Hết giờ làm bài! Hệ thống đã tự động thu bài. Điểm: ${score}/10đ`, "warning");
  } else {
    showToast(`Đã nộp bài thành công! Điểm của bạn: ${score}/10đ`, "success");
  }
}

// Render Result Banner
function renderExamResultBanner(score, correct, total, answered, timeTaken, isAuto) {
  const banner = document.getElementById('exam-result-banner');
  if (!banner) return;

  const numScore = parseFloat(score);
  let badgeColor = "bg-emerald-600 text-white";
  let evaluation = "Thao tác bấm máy xuất sắc! Bạn đã thuần thục các kỹ năng giải nhanh bằng Casio.";

  if (numScore >= 8) {
    badgeColor = "bg-emerald-600 text-white";
    evaluation = "Rất tốt! Bạn nắm vững hầu hết các phím tắt và thao tác Casio trọng tâm.";
  } else if (numScore >= 5) {
    badgeColor = "bg-blue-600 text-white";
    evaluation = "Khá ổn! Hãy xem kỹ phần hướng dẫn bấm máy bên dưới để củng cố các câu chưa đúng nhé.";
  } else {
    badgeColor = "bg-amber-600 text-white";
    evaluation = "Cần luyện tập thêm! Hãy kéo xuống xem kỹ hướng dẫn từng bước bấm máy và bấm 'Xáo trộn đề' để luyện lại.";
  }

  banner.innerHTML = `
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl ${badgeColor} flex flex-col items-center justify-center font-black shadow-lg shrink-0">
          <span class="text-2xl sm:text-3xl leading-none">${score}</span>
          <span class="text-[10px] uppercase font-bold opacity-80 mt-0.5">/10 Điểm</span>
        </div>
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${isAuto ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
              ${isAuto ? 'Hết giờ tự thu bài' : 'Đã nộp bài thành công'}
            </span>
            <span class="text-xs text-slate-500 font-medium">Thời gian: ${timeTaken}</span>
          </div>
          <h4 class="text-base sm:text-lg font-black text-slate-900 mt-1">
            Đúng ${correct}/${total} câu • Hoàn thành ${answered}/${total} câu
          </h4>
          <p class="text-xs text-slate-600 mt-0.5 max-w-xl leading-relaxed">${evaluation}</p>
        </div>
      </div>

      <!-- Action Buttons in Banner -->
      <div class="flex items-center gap-2.5 flex-wrap shrink-0">
        <button type="button" onclick="shuffleAndRestartExam()" class="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black transition shadow-sm flex items-center gap-1.5 active:scale-95">
          <i class="fa-solid fa-shuffle"></i>
          <span>Xáo Trộn Đề &amp; Làm Lại</span>
        </button>
        <button type="button" onclick="openExamHistoryModal()" class="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 active:scale-95">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <span>Xem Lịch Sử Điểm</span>
        </button>
      </div>
    </div>
  `;

  banner.classList.remove('hidden');
}

// History Modal
function openExamHistoryModal() {
  renderExamHistory();
  const modal = document.getElementById('exam-history-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeExamHistoryModal() {
  const modal = document.getElementById('exam-history-modal');
  if (modal) modal.classList.add('hidden');
}

function renderExamHistory() {
  const container = document.getElementById('exam-history-list');
  if (!container) return;

  if (examState.history.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400">
        <i class="fa-solid fa-graduation-cap text-3xl mb-2 text-slate-300"></i>
        <p class="text-xs font-medium">Bạn chưa nộp bài kiểm tra nào.</p>
        <p class="text-[11px] text-slate-400 mt-0.5">Làm bài và bấm "Nộp Bài" để lưu kết quả vào đây nhé!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = examState.history.map((h, idx) => {
    const numScore = parseFloat(h.score10);
    const scoreColor = numScore >= 8 ? "bg-emerald-100 text-emerald-800" : (numScore >= 5 ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800");

    return `
      <div class="p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3 transition">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl ${scoreColor} font-black flex flex-col items-center justify-center text-sm shrink-0">
            <span>${h.score10}</span>
            <span class="text-[8px] opacity-75 font-normal leading-none">/10đ</span>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-900 line-clamp-1">${h.title}</div>
            <div class="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
              <span><i class="fa-regular fa-calendar text-[10px]"></i> ${h.timestamp}</span>
              <span>•</span>
              <span>Đúng ${h.correctCount}/${h.totalCount} câu</span>
              <span>•</span>
              <span>${h.timeTaken}</span>
            </div>
          </div>
        </div>
        ${h.isAutoSubmitted ? `
          <span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 shrink-0">Hết giờ</span>
        ` : ''}
      </div>
    `;
  }).join('');
}

function clearExamHistory() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử điểm thi trên máy này?")) {
    examState.history = [];
    saveExamHistory();
    renderExamHistory();
    showToast("Đã xóa sạch lịch sử làm bài kiểm tra!", "info");
  }
}

// Backward Compatibility Stubs
function renderStudyQuiz() {
  if (!examState.currentQuestions || examState.currentQuestions.length === 0) {
    loadExamData();
  } else {
    renderExamQuestions();
    renderExamProgress();
  }
}

function selectQuizOption(qIdx, optIdx) {
  const q = examState.currentQuestions[qIdx];
  if (q && q.options[optIdx]) {
    selectExamAnswer(q.id, q.options[optIdx].id);
  }
}

function calculateQuizScore() {
  submitExam(false);
}

function resetStudyQuiz() {
  shuffleAndRestartExam();
}

// ----------------------------------------------------
// 3. LỊCH NHẮC NHỞ HỌC TẬP (LOCALSTORAGE + NOTIFICATION API)
// ----------------------------------------------------
function loadStudyReminders() {
  try {
    const raw = localStorage.getItem('abtn_study_reminders');
    studyHubState.reminders = raw ? JSON.parse(raw) : [...DEFAULT_SAMPLE_REMINDERS];
  } catch (_) {
    studyHubState.reminders = [...DEFAULT_SAMPLE_REMINDERS];
  }
}

function saveStudyReminders() {
  try {
    localStorage.setItem('abtn_study_reminders', JSON.stringify(studyHubState.reminders));
  } catch (_) {}
}

function renderStudyReminders() {
  const container = document.getElementById('study-reminders-list');
  const countText = document.getElementById('reminders-count-text');
  if (!container) return;

  const count = studyHubState.reminders.filter(r => !r.completed).length;
  if (countText) countText.textContent = `${count} lời nhắc sắp tới`;

  if (studyHubState.reminders.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <i class="fa-regular fa-bell-slash text-2xl mb-2"></i>
        <p class="text-xs">Chưa có lời nhắc nào. Hãy thêm lời nhắc để không quên giờ học!</p>
      </div>
    `;
    return;
  }

  // Sort by date + time
  const sorted = [...studyHubState.reminders].sort((a, b) => {
    return (a.date + ' ' + a.time).localeCompare(b.date + ' ' + b.time);
  });

  container.innerHTML = sorted.map(rem => {
    const repeatLabel = rem.repeat === 'daily' ? 'Hàng ngày' : (rem.repeat === 'weekly' ? 'Hàng tuần' : '1 lần');
    return `
      <div class="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition flex items-center justify-between gap-3 ${rem.completed ? 'opacity-60' : ''}">
        <div class="flex items-center gap-2.5 flex-1 min-w-0">
          <input 
            type="checkbox" 
            ${rem.completed ? 'checked' : ''} 
            onchange="toggleReminderDone('${rem.id}')"
            class="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 rounded cursor-pointer"
          />
          <div class="min-w-0 flex-1">
            <span class="text-xs font-bold text-slate-900 block truncate ${rem.completed ? 'line-through text-slate-400' : ''}">
              ${rem.title}
            </span>
            <div class="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
              <span><i class="fa-regular fa-calendar text-blue-500 mr-1"></i>${rem.date}</span>
              <span><i class="fa-regular fa-clock text-amber-500 mr-1"></i>${rem.time}</span>
              <span class="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-semibold">${repeatLabel}</span>
            </div>
          </div>
        </div>

        <button onclick="deleteStudyReminder('${rem.id}')" class="text-slate-400 hover:text-rose-600 text-xs p-1 transition" title="Xóa nhắc nhở">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');
}

function addStudyReminder(e) {
  e.preventDefault();
  const title = document.getElementById('rem-title').value.trim();
  const date = document.getElementById('rem-date').value;
  const time = document.getElementById('rem-time').value;
  const repeat = document.getElementById('rem-repeat').value;

  if (!title || !date || !time) return;

  const newRem = {
    id: 'rem_' + Date.now(),
    title,
    date,
    time,
    repeat,
    completed: false,
    createdAt: new Date().toISOString()
  };

  studyHubState.reminders.unshift(newRem);
  saveStudyReminders();
  renderStudyReminders();

  document.getElementById('rem-title').value = '';
  showToast("Đã lưu lời nhắc học tập trên máy của bạn!", "success");
}

function toggleReminderDone(id) {
  const rem = studyHubState.reminders.find(r => r.id === id);
  if (rem) {
    rem.completed = !rem.completed;
    saveStudyReminders();
    renderStudyReminders();
  }
}

function deleteStudyReminder(id) {
  studyHubState.reminders = studyHubState.reminders.filter(r => r.id !== id);
  saveStudyReminders();
  renderStudyReminders();
  showToast("Đã xóa lời nhắc!", "info");
}

function clearCompletedReminders() {
  studyHubState.reminders = studyHubState.reminders.filter(r => !r.completed);
  saveStudyReminders();
  renderStudyReminders();
  showToast("Đã dọn dẹp các lời nhắc đã xong!", "info");
}

function checkNotificationPermission() {
  const badge = document.getElementById('notif-permission-badge');
  if (!badge) return;

  if (!('Notification' in window)) {
    badge.textContent = "Không hỗ trợ";
    badge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500";
    return;
  }

  if (Notification.permission === 'granted') {
    badge.textContent = "Đã bật thông báo";
    badge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800";
  } else if (Notification.permission === 'denied') {
    badge.textContent = "Đang bị chặn";
    badge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800";
  } else {
    badge.textContent = "Chưa cấp quyền";
    badge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800";
  }
}

function requestStudyNotificationPermission() {
  if (!('Notification' in window)) {
    alert("Trình duyệt này không hỗ trợ Notification API.");
    return;
  }

  Notification.requestPermission().then(permission => {
    checkNotificationPermission();
    if (permission === 'granted') {
      showToast("Đã bật quyền thông báo trình duyệt thành công!", "success");
      try {
        new Notification("Anh Ba Tự Nhiên", {
          body: "Đã kích hoạt thông báo nhắc nhở học tập thành công!",
          icon: "favicon.ico"
        });
      } catch (_) {}
    } else if (permission === 'denied') {
      showToast("Bạn đã chặn thông báo. Bạn có thể mở lại trong Cài đặt trình duyệt.", "info");
    }
  });
}

function testStudyNotification() {
  if (!('Notification' in window)) {
    showToast("Trình duyệt không hỗ trợ thông báo.", "error");
    return;
  }
  if (Notification.permission !== 'granted') {
    showToast("Vui lòng bấm 'Bật Thông Báo Trình Duyệt' trước!", "info");
    return;
  }

  try {
    new Notification("Anh Ba Tự Nhiên: Đến giờ học rồi bạn ơi!", {
      body: "Hãy mở Casio và luyện nhanh 1 chuyên đề Toán hôm nay nhé!",
      icon: "favicon.ico"
    });
    showToast("Đã gửi thông báo thử nghiệm ra màn hình!", "success");
  } catch (err) {
    showToast("Lỗi gửi thông báo: " + err.message, "error");
  }
}

// ----------------------------------------------------
// 4. ĐẾM NGÀY ĐẾN KÌ THI
// ----------------------------------------------------
function loadStudyExams() {
  try {
    const raw = localStorage.getItem('abtn_exam_countdowns');
    studyHubState.exams = raw ? JSON.parse(raw) : [...DEFAULT_SAMPLE_EXAMS];
  } catch (_) {
    studyHubState.exams = [...DEFAULT_SAMPLE_EXAMS];
  }
}

function saveStudyExams() {
  try {
    localStorage.setItem('abtn_exam_countdowns', JSON.stringify(studyHubState.exams));
  } catch (_) {}
}

function toggleExamForm() {
  const container = document.getElementById('add-exam-form-container');
  if (container) {
    container.classList.toggle('hidden');
    if (!container.classList.contains('hidden')) {
      const input = document.getElementById('exam-name-input');
      if (input) input.focus();
    }
  }
}

function renderStudyExams() {
  const container = document.getElementById('study-exams-grid');
  if (!container) return;

  if (studyHubState.exams.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-10 text-center text-slate-400">
        <i class="fa-regular fa-clock text-2xl mb-2"></i>
        <p class="text-xs">Chưa có kỳ thi nào được thêm. Hãy bấm "Thêm Kỳ Thi Mới" ở trên!</p>
      </div>
    `;
    return;
  }

  const now = new Date().getTime();

  // Sort by target date ascending
  const sorted = [...studyHubState.exams].sort((a, b) => {
    return new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime();
  });

  container.innerHTML = sorted.map(exam => {
    const target = new Date(exam.targetDate).getTime();
    const diff = target - now;
    const isPast = diff <= 0;

    let days = 0, hours = 0, mins = 0, secs = 0;
    if (!isPast) {
      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      secs = Math.floor((diff % (1000 * 60)) / 1000);
    }

    const dateFormatted = new Date(exam.targetDate).toLocaleString('vi-VN', {
      hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric'
    });

    return `
      <div class="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 sm:p-5 shadow-md flex flex-col justify-between relative overflow-hidden group">
        <!-- Background decorative glow -->
        <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none"></div>

        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              ${isPast ? 'Đã diễn ra' : 'Sắp diễn ra'}
            </span>
            <button onclick="deleteExamCountdown('${exam.id}')" class="text-slate-400 hover:text-rose-400 text-xs transition p-1" title="Xóa kỳ thi">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>

          <h4 class="text-sm font-extrabold text-white leading-snug mb-1">
            ${exam.name}
          </h4>
          <span class="text-[11px] text-slate-400 block mb-4">
            <i class="fa-regular fa-calendar-check text-indigo-400 mr-1"></i> ${dateFormatted}
          </span>
        </div>

        <div>
          ${isPast ? `
            <div class="py-3 text-center bg-white/5 rounded-xl text-xs font-bold text-amber-300">
              Kỳ thi đã qua hoặc đang diễn ra!
            </div>
          ` : `
            <div class="grid grid-cols-4 gap-1.5 text-center">
              <div class="bg-white/10 rounded-xl py-2 px-1">
                <span class="text-lg sm:text-xl font-extrabold text-white font-mono block leading-none">${days}</span>
                <span class="text-[9px] text-slate-400 uppercase font-semibold">Ngày</span>
              </div>
              <div class="bg-white/10 rounded-xl py-2 px-1">
                <span class="text-lg sm:text-xl font-extrabold text-amber-300 font-mono block leading-none">${hours}</span>
                <span class="text-[9px] text-slate-400 uppercase font-semibold">Giờ</span>
              </div>
              <div class="bg-white/10 rounded-xl py-2 px-1">
                <span class="text-lg sm:text-xl font-extrabold text-white font-mono block leading-none">${mins}</span>
                <span class="text-[9px] text-slate-400 uppercase font-semibold">Phút</span>
              </div>
              <div class="bg-white/10 rounded-xl py-2 px-1">
                <span class="text-lg sm:text-xl font-extrabold text-indigo-300 font-mono block leading-none">${secs}</span>
                <span class="text-[9px] text-slate-400 uppercase font-semibold">Giây</span>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function updateStudyExamsTick() {
  // If exams tab is visible, update countdown numbers
  const examsTab = document.getElementById('study-tab-exams');
  if (examsTab && !examsTab.classList.contains('hidden')) {
    renderStudyExams();
  }
}

function addExamCountdown(e) {
  e.preventDefault();
  const nameInput = document.getElementById('exam-name-input');
  const dateInput = document.getElementById('exam-date-input');

  const name = nameInput.value.trim();
  const targetDate = dateInput.value;

  if (!name || !targetDate) return;

  const newExam = {
    id: 'exam_' + Date.now(),
    name,
    targetDate
  };

  studyHubState.exams.push(newExam);
  saveStudyExams();
  renderStudyExams();

  nameInput.value = '';
  dateInput.value = '';
  toggleExamForm();
  showToast("Đã thêm kỳ thi mới vào đồng hồ đếm ngược!", "success");
}

function deleteExamCountdown(id) {
  studyHubState.exams = studyHubState.exams.filter(e => e.id !== id);
  saveStudyExams();
  renderStudyExams();
  showToast("Đã xóa kỳ thi!", "info");
}

// ----------------------------------------------------
// 5. TỰ NOTE NGÀY (GHI CHÚ HỌC TẬP THEO NGÀY)
// ----------------------------------------------------
function loadStudyNotes() {
  try {
    const raw = localStorage.getItem('abtn_daily_notes');
    studyHubState.notes = raw ? JSON.parse(raw) : [...DEFAULT_SAMPLE_NOTES];
  } catch (_) {
    studyHubState.notes = [...DEFAULT_SAMPLE_NOTES];
  }
}

function saveStudyNotes() {
  try {
    localStorage.setItem('abtn_daily_notes', JSON.stringify(studyHubState.notes));
  } catch (_) {}
}

let noteSearchQuery = '';
function filterNotesBySearch(query) {
  noteSearchQuery = (query || '').toLowerCase().trim();
  renderDailyNotes();
}

function renderDailyNotes() {
  const container = document.getElementById('study-notes-list');
  const countText = document.getElementById('notes-count-text');
  if (!container) return;

  const filtered = studyHubState.notes.filter(n => {
    if (!noteSearchQuery) return true;
    return n.title.toLowerCase().includes(noteSearchQuery) || 
           n.content.toLowerCase().includes(noteSearchQuery);
  });

  if (countText) countText.textContent = `${studyHubState.notes.length} ghi chú đã lưu`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <i class="fa-regular fa-note-sticky text-2xl mb-2"></i>
        <p class="text-xs">Chưa có ghi chú nào. Hãy viết lại mục tiêu học tập hôm nay nhé!</p>
      </div>
    `;
    return;
  }

  // Sort by date descending
  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

  container.innerHTML = sorted.map(note => {
    let prioBadge = 'bg-blue-100 text-blue-800';
    let prioText = 'Bình thường';
    if (note.priority === 'important') {
      prioBadge = 'bg-amber-100 text-amber-800';
      prioText = 'Quan trọng ⭐';
    } else if (note.priority === 'urgent') {
      prioBadge = 'bg-rose-100 text-rose-800';
      prioText = 'Cần gấp 🔥';
    }

    const lines = note.content ? note.content.split('\n').filter(Boolean) : [];

    return `
      <div class="p-3.5 bg-slate-50 hover:bg-slate-100/90 rounded-2xl border border-slate-200 transition ${note.done ? 'opacity-60' : ''}">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded ${prioBadge}">
              ${prioText}
            </span>
            <span class="text-xs font-bold text-slate-500">
              <i class="fa-regular fa-calendar text-rose-500 mr-1"></i>${note.date}
            </span>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="editDailyNote('${note.id}')" class="text-slate-400 hover:text-blue-600 text-xs p-1" title="Chỉnh sửa">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="deleteDailyNote('${note.id}')" class="text-slate-400 hover:text-rose-600 text-xs p-1" title="Xóa ghi chú">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5 ${note.done ? 'line-through text-slate-400' : ''}">
          ${note.title}
        </h4>

        ${lines.length > 0 ? `
          <div class="space-y-1 text-xs text-slate-600 pl-1 border-l-2 border-rose-200 ml-1 mb-2">
            ${lines.map(l => `<p class="leading-relaxed">${l}</p>`).join('')}
          </div>
        ` : ''}

        <div class="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px]">
          <label class="flex items-center gap-1.5 text-slate-600 cursor-pointer">
            <input type="checkbox" ${note.done ? 'checked' : ''} onchange="toggleNoteDone('${note.id}')" class="rounded text-rose-600 focus:ring-rose-500"/>
            <span>${note.done ? 'Đã hoàn thành' : 'Đánh dấu xong'}</span>
          </label>
        </div>
      </div>
    `;
  }).join('');
}

function addDailyNote(e) {
  e.preventDefault();
  const editId = document.getElementById('note-edit-id').value;
  const date = document.getElementById('note-date').value;
  const title = document.getElementById('note-title').value.trim();
  const content = document.getElementById('note-content').value.trim();
  const priority = document.getElementById('note-priority').value;

  if (!date || !title) return;

  if (editId) {
    const note = studyHubState.notes.find(n => n.id === editId);
    if (note) {
      note.date = date;
      note.title = title;
      note.content = content;
      note.priority = priority;
      note.updatedAt = new Date().toISOString();
      showToast("Đã cập nhật ghi chú!", "success");
    }
    cancelEditNote();
  } else {
    const newNote = {
      id: 'note_' + Date.now(),
      date,
      title,
      content,
      priority,
      done: false,
      updatedAt: new Date().toISOString()
    };
    studyHubState.notes.unshift(newNote);
    showToast("Đã lưu ghi chú học tập vào máy của bạn!", "success");
  }

  saveStudyNotes();
  renderDailyNotes();

  document.getElementById('note-title').value = '';
  document.getElementById('note-content').value = '';
}

function editDailyNote(id) {
  const note = studyHubState.notes.find(n => n.id === id);
  if (!note) return;

  document.getElementById('note-edit-id').value = note.id;
  document.getElementById('note-date').value = note.date;
  document.getElementById('note-title').value = note.title;
  document.getElementById('note-content').value = note.content;
  document.getElementById('note-priority').value = note.priority;

  const submitBtn = document.getElementById('note-submit-btn');
  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Cập Nhật Ghi Chú';

  const cancelBtn = document.getElementById('note-cancel-edit-btn');
  if (cancelBtn) cancelBtn.classList.remove('hidden');

  document.getElementById('note-title').focus();
}

function cancelEditNote() {
  document.getElementById('note-edit-id').value = '';
  document.getElementById('note-title').value = '';
  document.getElementById('note-content').value = '';
  document.getElementById('note-date').value = new Date().toISOString().split('T')[0];

  const submitBtn = document.getElementById('note-submit-btn');
  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i> Lưu Ghi Chú';

  const cancelBtn = document.getElementById('note-cancel-edit-btn');
  if (cancelBtn) cancelBtn.classList.add('hidden');
}

function toggleNoteDone(id) {
  const note = studyHubState.notes.find(n => n.id === id);
  if (note) {
    note.done = !note.done;
    saveStudyNotes();
    renderDailyNotes();
  }
}

function deleteDailyNote(id) {
  studyHubState.notes = studyHubState.notes.filter(n => n.id !== id);
  saveStudyNotes();
  renderDailyNotes();
  showToast("Đã xóa ghi chú!", "info");
}

function clearAllNotes() {
  if (studyHubState.notes.length === 0) return;
  if (confirm("Bạn có chắc chắn muốn xóa tất cả ghi chú cá nhân không?")) {
    studyHubState.notes = [];
    saveStudyNotes();
    renderDailyNotes();
    showToast("Đã xóa tất cả ghi chú!", "info");
  }
}


// ======================================================================
// HỆ THỐNG UP TÀI LIỆU & ĐÓNG GÓP TÀI LIỆU (INDEXEDDB & 2 TẦNG BẢO MẬT)
// ======================================================================

const DEFAULT_COMMUNITY_DOCS = [
  {
    id: "contrib-toan-01",
    title: "[Mẫu đóng góp] 50 Câu Hỏi Trắc Nghiệm Mũ & Logarit Có Hướng Dẫn Bấm Máy",
    subject: "Toán",
    level: "THPT",
    author: "Bạn Minh Quân (Lớp 12 Chuyên)",
    badge: "Mẫu đã duyệt",
    desc: "Mẫu — tài liệu đóng góp đã duyệt. Rèn luyện kỹ năng bấm logarit và hàm số mũ bằng phím CALC và TABLE trên fx-580VN X.",
    pages: 15,
    size: "1.4 MB",
    type: "PDF",
    approvedAt: "10/11/2026",
    outline: [
      "Phần 1: Rút gọn biểu thức mũ - logarit bằng gán biến A, B",
      "Phần 2: Tìm tập nghiệm bất phương trình logarit bằng TABLE",
      "Phần 3: Bài toán thực tế lãi kép và tăng trưởng"
    ]
  },
  {
    id: "contrib-ly-01",
    title: "[Mẫu đóng góp] Sơ Đồ Tư Duy Sóng Ánh Sáng & Giao Thoa",
    subject: "Vật Lý",
    level: "THPT",
    author: "Học sinh ẩn danh (THPT Lê Hồng Phong)",
    badge: "Mẫu đã duyệt",
    desc: "Mẫu — tài liệu đóng góp đã duyệt. Sơ đồ tư duy trực quan công thức khoảng vân, vị trí vân sáng tối và giao thoa ánh sáng trắng.",
    pages: 8,
    size: "950 KB",
    type: "PDF",
    approvedAt: "08/11/2026",
    outline: [
      "Sơ đồ 1: Tán sắc ánh sáng và chiết suất",
      "Sơ đồ 2: Giao thoa khe Y-âng và bề rộng quang phổ",
      "Sơ đồ 3: Các dạng bài tập hay gài bẫy trong đề thi"
    ]
  }
];

// IndexedDB Helper
const DOCS_DB_NAME = 'ABTN_StudyDocs_DB';
const DOCS_DB_VERSION = 1;

function openDocsDB() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      resolve(null);
      return;
    }
    const req = indexedDB.open(DOCS_DB_NAME, DOCS_DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('my_docs')) {
        db.createObjectStore('my_docs', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('pending_docs')) {
        db.createObjectStore('pending_docs', { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

async function idbSaveDoc(storeName, docObj) {
  const db = await openDocsDB();
  if (!db) {
    // Fallback: save meta only in localStorage
    saveDocMetaFallback(storeName, docObj);
    return true;
  }
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.put(docObj);
      tx.oncomplete = () => {
        saveDocMetaFallback(storeName, docObj);
        resolve(true);
      };
      tx.onerror = () => {
        saveDocMetaFallback(storeName, docObj);
        resolve(false);
      };
    } catch (_) {
      saveDocMetaFallback(storeName, docObj);
      resolve(false);
    }
  });
}

async function idbGetDoc(storeName, id) {
  const db = await openDocsDB();
  if (!db) {
    const list = getDocMetaFallback(storeName);
    return list.find(d => d.id === id) || null;
  }
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    } catch (_) {
      resolve(null);
    }
  });
}

async function idbGetAllDocs(storeName) {
  const db = await openDocsDB();
  if (!db) {
    return getDocMetaFallback(storeName);
  }
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => {
        const res = req.result || [];
        if (res.length === 0) {
          resolve(getDocMetaFallback(storeName));
        } else {
          resolve(res);
        }
      };
      req.onerror = () => resolve(getDocMetaFallback(storeName));
    } catch (_) {
      resolve(getDocMetaFallback(storeName));
    }
  });
}

async function idbDeleteDoc(storeName, id) {
  const db = await openDocsDB();
  deleteDocMetaFallback(storeName, id);
  if (!db) return true;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.delete(id);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    } catch (_) {
      resolve(false);
    }
  });
}

// Fallback metadata helpers
function getDocMetaFallback(storeName) {
  try {
    const raw = localStorage.getItem(`abtn_${storeName}_meta`);
    return raw ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
}

function saveDocMetaFallback(storeName, docObj) {
  try {
    const list = getDocMetaFallback(storeName);
    const meta = {
      id: docObj.id,
      title: docObj.title,
      subject: docObj.subject,
      level: docObj.level,
      desc: docObj.desc,
      author: docObj.author,
      fileName: docObj.fileName,
      fileSize: docObj.fileSize,
      fileType: docObj.fileType,
      createdAt: docObj.createdAt,
      status: docObj.status
    };
    const idx = list.findIndex(d => d.id === docObj.id);
    if (idx >= 0) list[idx] = meta;
    else list.unshift(meta);
    localStorage.setItem(`abtn_${storeName}_meta`, JSON.stringify(list));
  } catch (_) {}
}

function deleteDocMetaFallback(storeName, id) {
  try {
    const list = getDocMetaFallback(storeName).filter(d => d.id !== id);
    localStorage.setItem(`abtn_${storeName}_meta`, JSON.stringify(list));
  } catch (_) {}
}

// Global Category State for Docs:
// 'library' | 'community' | 'my_docs' | 'pending'
if (!studyHubState.docCategory) studyHubState.docCategory = 'library';
studyHubState.myDocs = [];
studyHubState.pendingDocs = [];

async function loadUploadedDocs() {
  studyHubState.myDocs = await idbGetAllDocs('my_docs');
  studyHubState.pendingDocs = await idbGetAllDocs('pending_docs');
  updateDocCategoryBadges();
}

function updateDocCategoryBadges() {
  const myCountBadge = document.getElementById('my-docs-count-badge');
  if (myCountBadge) {
    myCountBadge.textContent = studyHubState.myDocs.length;
    myCountBadge.classList.toggle('hidden', studyHubState.myDocs.length === 0);
  }
  const pendingCountBadge = document.getElementById('pending-docs-count-badge');
  if (pendingCountBadge) {
    pendingCountBadge.textContent = studyHubState.pendingDocs.length;
    pendingCountBadge.classList.toggle('hidden', studyHubState.pendingDocs.length === 0);
  }
}

function switchDocCategory(category, btn) {
  studyHubState.docCategory = category;
  document.querySelectorAll('.doc-cat-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
    btn.classList.remove('bg-slate-100', 'text-slate-700');
  }
  renderStudyDocs();
}

// Format file size
function formatBytes(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Modal controls for Upload
function openUploadDocModal(prefillMode = 'private') {
  const modal = document.getElementById('upload-doc-modal');
  if (!modal) return;

  const modePrivate = document.getElementById('upload-mode-private');
  const modeContrib = document.getElementById('upload-mode-contrib');
  if (prefillMode === 'contrib' && modeContrib) {
    modeContrib.checked = true;
    toggleUploadMode('contrib');
  } else if (modePrivate) {
    modePrivate.checked = true;
    toggleUploadMode('private');
  }

  modal.classList.remove('hidden');
}

function closeUploadDocModal() {
  const modal = document.getElementById('upload-doc-modal');
  if (modal) modal.classList.add('hidden');
  const form = document.getElementById('upload-doc-form');
  if (form) form.reset();
}

function toggleUploadMode(mode) {
  const authorField = document.getElementById('upload-author-container');
  const noticePrivate = document.getElementById('upload-notice-private');
  const noticeContrib = document.getElementById('upload-notice-contrib');
  const submitText = document.getElementById('upload-submit-btn-text');

  if (mode === 'contrib') {
    if (authorField) authorField.classList.remove('hidden');
    if (noticePrivate) noticePrivate.classList.add('hidden');
    if (noticeContrib) noticeContrib.classList.remove('hidden');
    if (submitText) submitText.textContent = "Gửi Đóng Góp (Gửi Shop Duyệt)";
  } else {
    if (authorField) authorField.classList.add('hidden');
    if (noticePrivate) noticePrivate.classList.remove('hidden');
    if (noticeContrib) noticeContrib.classList.add('hidden');
    if (submitText) submitText.textContent = "Lưu Vào Máy Của Tôi";
  }
}

// Submit Upload / Contribution
async function handleDocUploadSubmit(e) {
  e.preventDefault();

  const mode = document.querySelector('input[name="upload_mode"]:checked')?.value || 'private';
  const title = document.getElementById('upload-doc-title').value.trim();
  const subject = document.getElementById('upload-doc-subject').value;
  const level = document.getElementById('upload-doc-level').value;
  const desc = document.getElementById('upload-doc-desc').value.trim();
  const author = document.getElementById('upload-doc-author')?.value.trim() || 'Học sinh ẩn danh';
  const fileInput = document.getElementById('upload-doc-file');

  if (!fileInput.files || fileInput.files.length === 0) {
    alert("Vui lòng chọn 1 file tài liệu để tải lên!");
    return;
  }

  const file = fileInput.files[0];
  const maxBytes = 15 * 1024 * 1024; // 15MB limit

  if (file.size > maxBytes) {
    alert(`File quá lớn (${formatBytes(file.size)}). Dung lượng tối đa cho phép là 15 MB!`);
    return;
  }

  // Check valid extensions
  const allowedExts = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'webp', 'txt'];
  const ext = file.name.split('.').pop().toLowerCase();
  if (!allowedExts.includes(ext)) {
    alert(`Định dạng file .${ext} không được hỗ trợ. Vui lòng chọn file PDF, Word (doc, docx) hoặc ảnh (jpg, png)!`);
    return;
  }

  // Read file data
  const reader = new FileReader();
  reader.onload = async (event) => {
    const fileDataUrl = event.target.result;
    const docId = 'doc_' + Date.now();

    const docObj = {
      id: docId,
      title: title,
      subject: subject,
      level: level,
      desc: desc || "Tài liệu học tập do người dùng tải lên.",
      author: mode === 'contrib' ? author : 'Chính bạn (Riêng tư)',
      fileName: file.name,
      fileSize: formatBytes(file.size),
      fileType: file.type || ext.toUpperCase(),
      fileData: fileDataUrl, // base64 DataURL for offline preview & download
      createdAt: new Date().toLocaleDateString('vi-VN'),
      status: mode === 'contrib' ? 'pending' : 'private'
    };

    if (mode === 'private') {
      await idbSaveDoc('my_docs', docObj);
      await loadUploadedDocs();
      closeUploadDocModal();
      
      // Switch view to my_docs
      const myDocsBtn = document.getElementById('btn-doc-cat-my');
      if (myDocsBtn) switchDocCategory('my_docs', myDocsBtn);
      
      showToast("Đã lưu tài liệu vào máy của bạn! (100% riêng tư)", "success");
    } else {
      // Contribution mode
      await idbSaveDoc('pending_docs', docObj);
      await loadUploadedDocs();
      closeUploadDocModal();
      addMyPoints('contrib', `Đóng góp tài liệu: "${title}" (Chờ shop duyệt)`, 50, { docId: docId });

      // Open Contribution Success Modal with prefilled messages
      openContribSuccessModal(docObj);

      // Switch view to pending
      const pendingBtn = document.getElementById('btn-doc-cat-pending');
      if (pendingBtn) switchDocCategory('pending', pendingBtn);
      
      showToast("Đã lưu vào danh sách chờ duyệt!", "success");
    }
  };

  reader.onerror = () => {
    alert("Có lỗi khi đọc file từ máy. Vui lòng thử lại!");
  };

  reader.readAsDataURL(file);
}

// Contribution Success Modal
let currentContribDoc = null;

function openContribSuccessModal(docObj) {
  currentContribDoc = docObj;
  const modal = document.getElementById('contrib-success-modal');
  const details = document.getElementById('contrib-success-details');
  if (!modal || !details) return;

  const msgText = `Chào Anh Ba Tự Nhiên (@_hgtuditto),\nEm muốn đóng góp tài liệu học tập lên web:\n- Tên: ${docObj.title}\n- Môn: ${docObj.subject} | Cấp: ${docObj.level}\n- Người gửi: ${docObj.author}\n- Tệp: ${docObj.fileName} (${docObj.fileSize})\nNhờ shop xem xét kiểm duyệt và đăng cho các bạn cùng học nhé!`;

  details.innerHTML = `
    <div class="text-center pb-3 mb-3 border-b border-slate-100">
      <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 text-xl">
        <i class="fa-solid fa-paper-plane"></i>
      </div>
      <h3 class="text-base font-extrabold text-slate-900">Đã Tạo Bản Đóng Góp Thành Công!</h3>
      <p class="text-xs text-slate-500 mt-1">Bản ghi đã lưu vào mục <strong>"Chờ duyệt"</strong> trên máy bạn.</p>
    </div>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 mb-3.5 leading-relaxed">
      <strong>⚠️ Bước tiếp theo:</strong> Do web chạy tĩnh trên GitHub Pages, để tài liệu xuất hiện cho toàn bộ học sinh khác xem, bạn hãy gửi thông tin hoặc file này về shop qua <strong>Zalo</strong> hoặc <strong>Threads @_hgtuditto</strong>. Shop sẽ kiểm tra bản quyền và duyệt đăng ngay!
    </div>

    <div class="bg-slate-50 rounded-xl p-3 border border-slate-200 mb-3.5">
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[11px] font-bold text-slate-600">Nội dung tin nhắn tạo sẵn:</span>
        <button onclick="copyContribMessage()" class="text-[11px] text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1">
          <i class="fa-regular fa-copy"></i> Sao chép
        </button>
      </div>
      <textarea id="contrib-msg-textarea" readonly rows="4" class="w-full text-xs font-mono bg-white p-2 border border-slate-200 rounded-lg text-slate-700 focus:outline-none">${msgText}</textarea>
    </div>

    <div class="grid grid-cols-2 gap-2 mb-2">
      <a 
        href="https://zalo.me/${(state.config && state.config.zaloPhone) || '0339591280'}" 
        target="_blank" 
        class="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm text-center"
      >
        <i class="fa-solid fa-comment-dots"></i>
        <span>Gửi Qua Zalo Shop</span>
      </a>

      <a 
        href="https://www.threads.com/@_hgtuditto" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="py-2.5 px-3 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm text-center"
      >
        <i class="fa-brands fa-threads"></i>
        <span>Nhắn Threads @_hgtuditto</span>
      </a>
    </div>

    <button onclick="closeContribSuccessModal()" class="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition">
      Đã Hiểu, Quay Lại Khu Tài Liệu
    </button>
  `;

  modal.classList.remove('hidden');
}

function copyContribMessage() {
  const ta = document.getElementById('contrib-msg-textarea');
  if (ta) {
    ta.select();
    navigator.clipboard.writeText(ta.value).then(() => {
      showToast("Đã sao chép tin nhắn vào clipboard!", "success");
    }).catch(() => {
      document.execCommand('copy');
      showToast("Đã sao chép tin nhắn!", "success");
    });
  }
}

function closeContribSuccessModal() {
  const modal = document.getElementById('contrib-success-modal');
  if (modal) modal.classList.add('hidden');
}

// In-Browser Document Viewer
async function viewLocalUploadedDoc(storeName, docId) {
  const doc = await idbGetDoc(storeName, docId);
  if (!doc) {
    showToast("Không tìm thấy dữ liệu file trên máy!", "error");
    return;
  }

  const modal = document.getElementById('doc-file-viewer-modal');
  const container = document.getElementById('doc-file-viewer-container');
  const titleEl = document.getElementById('doc-file-viewer-title');
  if (!modal || !container) return;

  if (titleEl) titleEl.textContent = doc.title;

  const isPdf = doc.fileName.toLowerCase().endsWith('.pdf') || (doc.fileType && doc.fileType.includes('pdf'));
  const isImage = (doc.fileType && doc.fileType.startsWith('image/')) || /\.(jpg|jpeg|png|webp|gif)$/i.test(doc.fileName);

  if (isPdf && doc.fileData) {
    container.innerHTML = `
      <div class="w-full h-[70vh] rounded-2xl overflow-hidden border border-slate-200">
        <iframe src="${doc.fileData}" class="w-full h-full border-0"></iframe>
      </div>
    `;
  } else if (isImage && doc.fileData) {
    container.innerHTML = `
      <div class="max-h-[70vh] flex items-center justify-center p-2 bg-slate-100 rounded-2xl overflow-auto border border-slate-200">
        <img src="${doc.fileData}" alt="${doc.title}" class="max-w-full max-h-[65vh] object-contain rounded-xl shadow-sm"/>
      </div>
    `;
  } else {
    // Word or other binary file: display nice card with download action
    container.innerHTML = `
      <div class="py-14 text-center bg-slate-50 rounded-2xl border border-slate-200 p-6">
        <div class="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3 text-2xl">
          <i class="fa-solid fa-file-word"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900">${doc.fileName}</h4>
        <p class="text-xs text-slate-500 mt-1 mb-4">Định dạng file Word / Tài liệu (${doc.fileSize}). Hãy tải về máy để mở bằng Word hoặc Docs.</p>
        <button onclick="downloadUploadedDoc('${storeName}', '${doc.id}')" class="py-2.5 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition inline-flex items-center gap-2 shadow-sm">
          <i class="fa-solid fa-download"></i> Tải Về Máy Ngay
        </button>
      </div>
    `;
  }

  modal.classList.remove('hidden');
}

function closeDocFileViewer() {
  const modal = document.getElementById('doc-file-viewer-modal');
  if (modal) modal.classList.add('hidden');
  const container = document.getElementById('doc-file-viewer-container');
  if (container) container.innerHTML = '';
}

// Download local uploaded document
async function downloadUploadedDoc(storeName, docId) {
  const doc = await idbGetDoc(storeName, docId);
  if (!doc || !doc.fileData) {
    showToast("Không tìm thấy tệp để tải về!", "error");
    return;
  }
  const a = document.createElement('a');
  a.href = doc.fileData;
  a.download = doc.fileName || (doc.title + '.pdf');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("Đang tải file về máy...", "success");
  addMyPoints('download', `Tải tài liệu cá nhân: ${doc.title || doc.fileName}`, 5, { docId: docId });
}

// Delete document from my_docs or pending_docs
async function deleteUploadedDoc(storeName, docId) {
  const isPending = storeName === 'pending_docs';
  const confirmMsg = isPending 
    ? "Bạn có chắc chắn muốn hủy bản đóng góp này khỏi danh sách chờ duyệt?" 
    : "Bạn có chắc chắn muốn xóa tài liệu này khỏi trình duyệt máy bạn?";
  
  if (!confirm(confirmMsg)) return;

  await idbDeleteDoc(storeName, docId);
  await loadUploadedDocs();
  renderStudyDocs();
  showToast("Đã xóa tài liệu!", "info");
}

// Re-send contribution to shop
async function resendPendingDoc(docId) {
  const doc = await idbGetDoc('pending_docs', docId);
  if (doc) {
    openContribSuccessModal(doc);
  }
}


// ====================================================
// 6. BẢNG XẾP HẠNG GÓP CÔNG XÂY DỰNG & TÍCH ĐIỂM
// ====================================================

const DEFAULT_LEADERBOARD_DATA = {
  title: "Bảng Xếp Hạng Những Người Góp Công Xây Dựng (Mẫu)",
  subtitle: "Tôn vinh các bạn học sinh, sinh viên tích cực đóng góp tài liệu, ôn luyện bấm máy và xây dựng cộng đồng",
  badge: "Bảng mẫu cộng đồng",
  note: "Toàn bộ tên, điểm số và số liệu trên bảng cộng đồng này là dữ liệu MẪU minh họa. Do web chạy tĩnh trên GitHub Pages, khi học sinh muốn vinh danh tên mình lên Bảng Cộng Đồng chính thức, vui lòng gửi tên và ảnh chụp lịch sử điểm trên máy về shop qua Zalo hoặc Threads @_hgtuditto để shop duyệt và cập nhật vào file dữ liệu.",
  scoringRules: {
    docContributed: 50,
    docDownloaded: 5,
    examBase: 10,
    examBonus: "Cộng thêm theo điểm bài làm (tối đa +10 điểm bài làm, tổng +20 điểm/bài)",
    antiSpamNote: "Làm lại bài hoặc tải tài liệu vẫn được tính điểm nhưng có giới hạn tần suất (cooldown) để tránh cộng trùng vô hạn.",
    proposalNote: "Đây là thang điểm đề xuất để Cơ duyệt."
  },
  topContributors: [
    {
      rank: 1,
      name: "[Mẫu] Minh Khang (THPT Chuyên)",
      points: 380,
      docsContributed: 5,
      docsDownloaded: 18,
      examsCompleted: 12,
      badge: "Quán Quân Bấm Máy",
      avatar: "fa-crown",
      avatarBg: "from-amber-400 to-amber-600"
    },
    {
      rank: 2,
      name: "[Mẫu] Thuỳ Dương (Lớp 12 A1)",
      points: 295,
      docsContributed: 4,
      docsDownloaded: 15,
      examsCompleted: 8,
      badge: "Á Quân Đóng Góp",
      avatar: "fa-medal",
      avatarBg: "from-slate-300 to-slate-500"
    },
    {
      rank: 3,
      name: "[Mẫu] Hoàng Nam (THCS Chu Văn An)",
      points: 210,
      docsContributed: 2,
      docsDownloaded: 22,
      examsCompleted: 9,
      badge: "Top 3 Tích Cực",
      avatar: "fa-award",
      avatarBg: "from-amber-600 to-amber-800"
    },
    {
      rank: 4,
      name: "[Mẫu] Phương Thảo (ĐH Sư Phạm)",
      points: 165,
      docsContributed: 2,
      docsDownloaded: 11,
      examsCompleted: 6,
      badge: "Học Sinh Chăm Chỉ"
    },
    {
      rank: 5,
      name: "[Mẫu] Tuấn Kiệt (Khối 11)",
      points: 140,
      docsContributed: 1,
      docsDownloaded: 16,
      examsCompleted: 5,
      badge: "Chiến Binh Casio"
    },
    {
      rank: 6,
      name: "[Mẫu] Bảo Ngọc (Khối 10)",
      points: 95,
      docsContributed: 1,
      docsDownloaded: 9,
      examsCompleted: 4,
      badge: "Thành Viên Mới Tích Cực"
    }
  ]
};

let leaderboardData = { ...DEFAULT_LEADERBOARD_DATA };

// Personal Points State (localStorage)
let myPointsState = {
  profileName: "Học sinh chăm chỉ",
  totalPoints: 0,
  stats: {
    contributed: 0,
    downloaded: 0,
    exams: 0
  },
  history: [],
  lastDownloadTimes: {},
  lastExamSubmitTime: 0
};

// Load leaderboard from API or fallback to static data/leaderboard.json
async function loadLeaderboardData() {
  // Render fallback data immediately so UI is never blank while fetching
  renderLeaderboard();

  let loaded = false;

  try {
    const res = await fetch('/api/leaderboard');
    if (res.ok) {
      const data = await res.json();
      if (data && data.topContributors) {
        leaderboardData = data;
        loaded = true;
      }
    }
  } catch (_) {
    // /api/leaderboard is only available on local Python server
  }

  if (!loaded) {
    try {
      const resStatic = await fetch('data/leaderboard.json');
      if (resStatic.ok) {
        const dataStatic = await resStatic.json();
        if (dataStatic && dataStatic.topContributors) {
          leaderboardData = dataStatic;
          loaded = true;
        }
      }
    } catch (err) {
      console.warn("Could not fetch data/leaderboard.json, using fallback", err);
    }
  }

  renderLeaderboard();
}

// Load personal points from localStorage
function loadMyPointsData() {
  try {
    const raw = localStorage.getItem('abtn_user_points_data');
    if (raw) {
      const parsed = JSON.parse(raw);
      myPointsState.profileName = parsed.profileName || "Học sinh chăm chỉ";
      myPointsState.totalPoints = typeof parsed.totalPoints === 'number' ? parsed.totalPoints : 0;
      myPointsState.stats = parsed.stats || { contributed: 0, downloaded: 0, exams: 0 };
      myPointsState.history = Array.isArray(parsed.history) ? parsed.history : [];
      myPointsState.lastDownloadTimes = parsed.lastDownloadTimes || {};
      myPointsState.lastExamSubmitTime = parsed.lastExamSubmitTime || 0;
    }
  } catch (e) {
    console.warn("Error loading myPointsState", e);
  }
  renderMyPointsView();
}

function saveMyPointsData() {
  try {
    localStorage.setItem('abtn_user_points_data', JSON.stringify(myPointsState));
  } catch (e) {
    console.warn("Error saving myPointsState", e);
  }
}

// Add Points Engine with Cooldown / Anti-Spam protection
function addMyPoints(type, title, points, meta = {}) {
  const now = Date.now();

  // Cooldown rules to prevent infinite duplicate point farming
  if (type === 'download') {
    const docKey = meta.docId || 'general';
    const lastTime = myPointsState.lastDownloadTimes[docKey] || 0;
    if (now - lastTime < 15000) { // 15 seconds cooldown per document
      console.log("Download points on cooldown for doc:", docKey);
      return false;
    }
    myPointsState.lastDownloadTimes[docKey] = now;
    myPointsState.stats.downloaded++;
  } else if (type === 'exam') {
    if (now - myPointsState.lastExamSubmitTime < 10000) { // 10 seconds cooldown between exam submits
      console.log("Exam points on cooldown");
      return false;
    }
    myPointsState.lastExamSubmitTime = now;
    myPointsState.stats.exams++;
  } else if (type === 'contrib') {
    myPointsState.stats.contributed++;
  }

  myPointsState.totalPoints += points;

  // Prepend to history
  myPointsState.history.unshift({
    id: 'pts_' + now,
    type: type,
    title: title,
    points: points,
    timestamp: new Date().toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
  });

  if (myPointsState.history.length > 50) {
    myPointsState.history = myPointsState.history.slice(0, 50);
  }

  saveMyPointsData();
  renderMyPointsView();

  showToast(`+${points} điểm! ${title}`, "success");
  return true;
}

// Rank & Badge Logic
function getMyRankInfo(points) {
  if (points >= 500) {
    return { name: "Đại Kiện Tướng", color: "bg-amber-100 text-amber-800 border-amber-300", next: "Đã đạt cấp tối đa! 👑", percent: 100 };
  } else if (points >= 250) {
    const rem = 500 - points;
    const pct = Math.round(((points - 250) / 250) * 100);
    return { name: "Cao Thủ Bấm Máy", color: "bg-purple-100 text-purple-800 border-purple-300", next: `Cần thêm ${rem} điểm để lên Đại Kiện Tướng`, percent: pct };
  } else if (points >= 100) {
    const rem = 250 - points;
    const pct = Math.round(((points - 100) / 150) * 100);
    return { name: "Chiến Binh Casio", color: "bg-emerald-100 text-emerald-800 border-emerald-300", next: `Cần thêm ${rem} điểm để lên Cao Thủ`, percent: pct };
  } else if (points >= 30) {
    const rem = 100 - points;
    const pct = Math.round(((points - 30) / 70) * 100);
    return { name: "Học Sinh Chăm Chỉ", color: "bg-blue-100 text-blue-800 border-blue-300", next: `Cần thêm ${rem} điểm để lên Chiến Binh`, percent: pct };
  } else {
    const rem = 30 - points;
    const pct = Math.round((points / 30) * 100);
    return { name: "Học Viên Khởi Động", color: "bg-slate-100 text-slate-700 border-slate-300", next: `Cần thêm ${rem} điểm để lên Chăm Chỉ`, percent: pct };
  }
}

// Render Leaderboard Community View
function renderLeaderboard() {
  const podiumEl = document.getElementById('lb-podium-container');
  const tableEl = document.getElementById('lb-community-table-body');
  if (!podiumEl || !tableEl) return;

  const top3 = (leaderboardData.topContributors || []).slice(0, 3);
  const rest = (leaderboardData.topContributors || []).slice(3);

  const gold = top3.find(c => c.rank === 1) || top3[0];
  const silver = top3.find(c => c.rank === 2) || top3[1];
  const bronze = top3.find(c => c.rank === 3) || top3[2];

  let podiumHtml = '';

  // Silver (Rank 2)
  if (silver) {
    podiumHtml += `
      <div class="order-2 md:order-1 bg-white rounded-3xl p-5 border-2 border-slate-300 shadow-sm flex flex-col justify-between relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-slate-200/50 rounded-full blur-2xl -mr-6 -mt-6"></div>
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-black text-sm shadow-sm">
              🥈 2
            </span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
              ${silver.badge}
            </span>
          </div>

          <div class="text-center my-3">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-400 text-white flex items-center justify-center text-2xl mx-auto shadow-md">
              <i class="fa-solid fa-medal"></i>
            </div>
            <h4 class="text-sm font-black text-slate-900 mt-2 truncate">${silver.name}</h4>
            <div class="text-2xl font-black text-slate-800 mt-1">${silver.points} <span class="text-xs font-bold text-slate-500">điểm</span></div>
          </div>

          <div class="grid grid-cols-3 gap-1.5 text-center text-[10px] mt-4 pt-3 border-t border-slate-100">
            <div class="p-1.5 bg-slate-50 rounded-xl">
              <strong class="block text-slate-800">${silver.docsContributed}</strong>
              <span class="text-slate-400">Nộp</span>
            </div>
            <div class="p-1.5 bg-slate-50 rounded-xl">
              <strong class="block text-slate-800">${silver.docsDownloaded}</strong>
              <span class="text-slate-400">Tải</span>
            </div>
            <div class="p-1.5 bg-slate-50 rounded-xl">
              <strong class="block text-slate-800">${silver.examsCompleted}</strong>
              <span class="text-slate-400">Bài thi</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Gold (Rank 1 - Center piece)
  if (gold) {
    podiumHtml += `
      <div class="order-1 md:order-2 bg-gradient-to-b from-amber-50/80 via-white to-amber-50/40 rounded-3xl p-6 border-2 border-amber-400 shadow-lg flex flex-col justify-between relative overflow-hidden ring-4 ring-amber-400/20 transform md:-translate-y-2">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/40 rounded-full blur-3xl -mr-8 -mt-8"></div>
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-xl bg-amber-400 text-amber-950 flex items-center gap-1.5 font-black text-xs shadow-md">
              <i class="fa-solid fa-crown text-amber-900"></i>
              <span>🥇 QUÁN QUÂN</span>
            </span>
            <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              ${gold.badge}
            </span>
          </div>

          <div class="text-center my-4">
            <div class="w-18 h-18 rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center text-3xl mx-auto shadow-lg ring-4 ring-amber-200">
              <i class="fa-solid fa-trophy animate-bounce"></i>
            </div>
            <h4 class="text-base font-black text-slate-900 mt-3 truncate">${gold.name}</h4>
            <div class="text-3xl font-black text-amber-600 mt-1">${gold.points} <span class="text-xs font-bold text-slate-500">điểm</span></div>
          </div>

          <div class="grid grid-cols-3 gap-2 text-center text-xs mt-4 pt-3 border-t border-amber-200/80">
            <div class="p-2 bg-white/80 rounded-xl border border-amber-200">
              <strong class="block text-amber-900 font-extrabold">${gold.docsContributed}</strong>
              <span class="text-[10px] text-amber-700">Tài liệu nộp</span>
            </div>
            <div class="p-2 bg-white/80 rounded-xl border border-amber-200">
              <strong class="block text-amber-900 font-extrabold">${gold.docsDownloaded}</strong>
              <span class="text-[10px] text-amber-700">Lượt tải về</span>
            </div>
            <div class="p-2 bg-white/80 rounded-xl border border-amber-200">
              <strong class="block text-amber-900 font-extrabold">${gold.examsCompleted}</strong>
              <span class="text-[10px] text-amber-700">Bài kiểm tra</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Bronze (Rank 3)
  if (bronze) {
    podiumHtml += `
      <div class="order-3 bg-white rounded-3xl p-5 border-2 border-amber-600/30 shadow-sm flex flex-col justify-between relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-amber-600/10 rounded-full blur-2xl -mr-6 -mt-6"></div>
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-sm shadow-sm">
              🥉 3
            </span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800">
              ${bronze.badge}
            </span>
          </div>

          <div class="text-center my-3">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center text-2xl mx-auto shadow-md">
              <i class="fa-solid fa-award"></i>
            </div>
            <h4 class="text-sm font-black text-slate-900 mt-2 truncate">${bronze.name}</h4>
            <div class="text-2xl font-black text-amber-800 mt-1">${bronze.points} <span class="text-xs font-bold text-slate-500">điểm</span></div>
          </div>

          <div class="grid grid-cols-3 gap-1.5 text-center text-[10px] mt-4 pt-3 border-t border-slate-100">
            <div class="p-1.5 bg-slate-50 rounded-xl">
              <strong class="block text-slate-800">${bronze.docsContributed}</strong>
              <span class="text-slate-400">Nộp</span>
            </div>
            <div class="p-1.5 bg-slate-50 rounded-xl">
              <strong class="block text-slate-800">${bronze.docsDownloaded}</strong>
              <span class="text-slate-400">Tải</span>
            </div>
            <div class="p-1.5 bg-slate-50 rounded-xl">
              <strong class="block text-slate-800">${bronze.examsCompleted}</strong>
              <span class="text-slate-400">Bài thi</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  podiumEl.innerHTML = podiumHtml;

  // Render Table for Ranks 4+
  tableEl.innerHTML = rest.map(c => `
    <tr class="hover:bg-slate-50/80 transition">
      <td class="py-3 pl-2 font-black text-slate-500">
        <span class="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-xs">
          ${c.rank}
        </span>
      </td>
      <td class="py-3 font-bold text-slate-900">
        <div class="flex items-center gap-2">
          <span>${c.name}</span>
          ${c.badge ? `<span class="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-semibold">${c.badge}</span>` : ''}
        </div>
      </td>
      <td class="py-3 text-center text-slate-600">${c.docsContributed}</td>
      <td class="py-3 text-center text-slate-600">${c.docsDownloaded}</td>
      <td class="py-3 text-center text-slate-600">${c.examsCompleted}</td>
      <td class="py-3 text-right pr-2 font-black text-blue-600 text-sm">${c.points} đ</td>
    </tr>
  `).join('');
}

// Render Personal Points View
function renderMyPointsView() {
  const nameEl = document.getElementById('my-profile-name');
  const pointsEl = document.getElementById('my-total-points-display');
  const badgeEl = document.getElementById('my-rank-badge');
  const nextEl = document.getElementById('my-next-rank-text');

  const statContribEl = document.getElementById('my-stat-contributed');
  const statDownEl = document.getElementById('my-stat-downloaded');
  const statExamEl = document.getElementById('my-stat-exams');

  const historyListEl = document.getElementById('my-points-history-list');
  const historyCountEl = document.getElementById('my-history-count-text');

  if (nameEl) nameEl.textContent = myPointsState.profileName;
  if (pointsEl) pointsEl.textContent = myPointsState.totalPoints;

  const rankInfo = getMyRankInfo(myPointsState.totalPoints);
  if (badgeEl) {
    badgeEl.textContent = rankInfo.name;
    badgeEl.className = `px-2 py-0.5 rounded-full text-[10px] font-bold border ${rankInfo.color}`;
  }
  if (nextEl) nextEl.textContent = rankInfo.next;

  if (statContribEl) statContribEl.textContent = myPointsState.stats.contributed;
  if (statDownEl) statDownEl.textContent = myPointsState.stats.downloaded;
  if (statExamEl) statExamEl.textContent = myPointsState.stats.exams;

  if (historyCountEl) historyCountEl.textContent = `${myPointsState.history.length} hoạt động`;

  if (historyListEl) {
    if (myPointsState.history.length === 0) {
      historyListEl.innerHTML = `
        <div class="text-center py-8 text-slate-400">
          <i class="fa-solid fa-coins text-3xl mb-2 text-slate-300"></i>
          <p class="text-xs font-medium">Bạn chưa có điểm tích lũy nào.</p>
          <p class="text-[11px] text-slate-400 mt-0.5">Tải tài liệu (+5đ), nộp bài kiểm tra (+10-20đ), hoặc gửi tài liệu (+50đ) để nhận điểm nhé!</p>
        </div>
      `;
    } else {
      historyListEl.innerHTML = myPointsState.history.map(item => {
        let icon = "fa-star";
        let color = "bg-blue-100 text-blue-700";
        if (item.type === 'contrib') {
          icon = "fa-file-circle-plus";
          color = "bg-amber-100 text-amber-700";
        } else if (item.type === 'download') {
          icon = "fa-cloud-arrow-down";
          color = "bg-blue-100 text-blue-700";
        } else if (item.type === 'exam') {
          icon = "fa-clipboard-check";
          color = "bg-emerald-100 text-emerald-700";
        }

        return `
          <div class="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3 transition">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 rounded-xl ${color} flex items-center justify-center text-xs shrink-0">
                <i class="fa-solid ${icon}"></i>
              </div>
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-900 truncate">${item.title}</div>
                <div class="text-[10px] text-slate-400">${item.timestamp}</div>
              </div>
            </div>
            <span class="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200 shrink-0">
              +${item.points}đ
            </span>
          </div>
        `;
      }).join('');
    }
  }
}

// Switch between Community, My Stats, Rules subtabs
function switchLeaderboardView(viewName, btn) {
  document.querySelectorAll('.lb-subtab-btn').forEach(b => {
    b.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
    b.classList.add('text-slate-600');
  });
  if (btn) {
    btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
    btn.classList.remove('text-slate-600');
  }

  document.querySelectorAll('.lb-view-section').forEach(sec => sec.classList.add('hidden'));

  const normalizedView = String(viewName || '').replace(/_/g, '-');
  const target = document.getElementById(`lb-view-${normalizedView}`) || document.getElementById(`lb-view-${viewName}`);
  if (target) target.classList.remove('hidden');
}

// Edit nickname
function editMyProfileName() {
  const current = myPointsState.profileName || "Học sinh chăm chỉ";
  const name = prompt("Nhập tên / biệt danh hiển thị trên máy của bạn:", current);
  if (name && name.trim()) {
    myPointsState.profileName = name.trim();
    saveMyPointsData();
    renderMyPointsView();
    showToast("Đã cập nhật biệt danh của bạn!", "success");
  }
}

// Reset points
function resetMyPointsData() {
  if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ điểm và lịch sử tích lũy trên máy này về 0?")) {
    myPointsState.totalPoints = 0;
    myPointsState.stats = { contributed: 0, downloaded: 0, exams: 0 };
    myPointsState.history = [];
    myPointsState.lastDownloadTimes = {};
    myPointsState.lastExamSubmitTime = 0;
    saveMyPointsData();
    renderMyPointsView();
    showToast("Đã đặt lại dữ liệu điểm cá nhân!", "info");
  }
}

// Submit score modal helpers
function submitMyScoreToShopModal() {
  const previewEl = document.getElementById('submit-score-preview');
  if (previewEl) {
    previewEl.innerHTML = `
      <div><strong>Học sinh:</strong> ${myPointsState.profileName}</div>
      <div><strong>Tổng điểm tích lũy:</strong> <span class="text-amber-600 font-black text-sm">${myPointsState.totalPoints} điểm</span></div>
      <div><strong>Danh hiệu:</strong> ${getMyRankInfo(myPointsState.totalPoints).name}</div>
      <div><strong>Hoạt động:</strong> ${myPointsState.stats.contributed} tài liệu nộp • ${myPointsState.stats.downloaded} lượt tải • ${myPointsState.stats.exams} bài thi</div>
    `;
  }
  const modal = document.getElementById('submit-score-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSubmitScoreModal() {
  const modal = document.getElementById('submit-score-modal');
  if (modal) modal.classList.add('hidden');
}

function getScoreSubmissionText() {
  return `Chào shop Anh Ba Tự Nhiên! Mình là ${myPointsState.profileName}, muốn gửi xét duyệt lên Bảng Xếp Hạng Cộng Đồng web:
- Tổng điểm trên máy: ${myPointsState.totalPoints} điểm
- Danh hiệu: ${getMyRankInfo(myPointsState.totalPoints).name}
- Thống kê: ${myPointsState.stats.contributed} tài liệu đóng góp, ${myPointsState.stats.downloaded} lượt tải, ${myPointsState.stats.exams} bài kiểm tra hoàn thành.
Nhờ shop kiểm tra và duyệt đưa tên mình lên Bảng Vinh Danh Cộng Đồng nhé!`;
}

function copyScoreMessageAndOpenThreads() {
  const text = getScoreSubmissionText();
  navigator.clipboard.writeText(text).then(() => {
    showToast("Đã sao chép nội dung thành tích!", "success");
  }).catch(() => {});
  window.open("https://www.threads.com/@_hgtuditto", "_blank");
}

function copyScoreMessageAndOpenZalo() {
  const text = getScoreSubmissionText();
  navigator.clipboard.writeText(text).then(() => {
    showToast("Đã sao chép nội dung thành tích!", "success");
  }).catch(() => {});
  window.open("https://zalo.me/0971075326", "_blank");
}
