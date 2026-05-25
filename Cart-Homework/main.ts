import { Product, PhysicalProduct, DigitalProduct } from "./products";
import { Cart } from "./cart";
import { MomoPayment } from "./payMent";

// 1. Tạo các sản phẩm thực tế
const book = new PhysicalProduct("P001", "Sách Giáo Khoa", 50000, 0.5); // 50k + 5k ship = 55k
const windowsKey = new DigitalProduct("D001", "Windows 11 License", 200000, "https://download.microsoft.com"); // 200k - 5% = 190k

// 2. Người dùng bỏ hàng vào giỏ
const myCart = new Cart();
myCart.addItem(book, 2);       // 55k * 2 = 110k
myCart.addItem(windowsKey, 1); // 190k * 1 = 190k
// Tổng giỏ hàng dự kiến: 110k + 190k = 300k

// 3. Tiến hành thanh toán qua Ví Momo
const momoWallet = new MomoPayment();
myCart.checkout(momoWallet);

// KẾT QUẢ IN RA TRÊN TERMINAL:
// --- BẮT ĐẦU THANH TOÁN ---
// Tổng hóa đơn cần thanh toán: 300000 VND
// [Momo] Đang kích hoạt mã QR xử lý khoản tiền: 300000 VND...
// -> Chúc mừng! Thanh toán thành công. Đang làm trống giỏ hàng.