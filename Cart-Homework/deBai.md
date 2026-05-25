📋 ĐỀ BÀI: Thiết Kế Module Giỏ Hàng & Thanh Toán
Bạn cần xây dựng một hệ thống cốt lõi quản lý giỏ hàng với các yêu cầu sau:

Quản lý Sản phẩm: Hệ thống có nhiều loại sản phẩm.

Sản phẩm vật lý (Physical Product): Có trọng lượng, giá cuối cùng bằng giá gốc + phí vận chuyển tính theo cân nặng (ví dụ: cứ 1kg tính thêm 10.000 VND).

Sản phẩm số (Digital Product): Không có trọng lượng, có link tải về, được giảm giá 5% trực tiếp trên giá gốc vì không tốn chi phí lưu kho.

Quản lý Giỏ hàng: Giỏ hàng chứa danh sách các mặt hàng và số lượng. Không cho phép bên ngoài tự ý can thiệp thay đổi trực tiếp danh sách sản phẩm hay số lượng nếu không thông qua các phương thức hợp lệ.

Cổng thanh toán: Hệ thống hỗ trợ nhiều phương thức thanh toán khác nhau (Ví điện tử Momo, COD khi nhận hàng, Thẻ tín dụng). Hệ thống xử lý thanh toán của giỏ hàng chỉ cần biết lệnh "Thanh toán" được kích hoạt thành công hay thất bại, không cần quan tâm cơ chế xử lý chi tiết bên trong từng cổng.