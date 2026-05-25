export interface PaymentProcressor {
    pay(amount: number): boolean;
}

export class MomoPayment implements PaymentProcressor {
    pay(amount: number): boolean {
        // Giả lập thanh toán
         console.log(`[Momo] Đang kích hoạt mã QR để xử lý khoản tiền: ${amount} VND` );
         return true;
    }
}

export class CodPayment implements PaymentProcressor {
    pay(amount: number): boolean {
        console.log(`[COD] Đã tạo đơn hàng thu hộ số tiền: ${amount} VND`);
        return true;
    }
}