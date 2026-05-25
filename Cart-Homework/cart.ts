import { Product } from './products'; // Cart cũng cần import Product để hiểu kiểu dữ liệu
import { PaymentProcressor } from './payMent';

export class CartItem {
    constructor(
        public product: Product,
        private _quantity: number,

    ) {

    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        if (value < 0) {
            this._quantity= value;
        }
    }

    get totalItemPrice(): number {
        return this.product.getFinalPrice() * this._quantity;
    }
}

export class Cart {
    private items: CartItem[] = [];

    public addItem (product: Product, quantity: number = 1): void {
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
    }

    public calculateTotal(): number { 
        return this.items.reduce((sum, item) => sum + item.totalItemPrice, 0);
    }

    public checkout( paymentMethod: PaymentProcressor): void {
        const totalAmount = this.calculateTotal();
        console.log(`\n --- BẮT ĐẦU THANH TOÁN --- `);
        console.log(`Tổng hóa đơn cần thanh toán: ${totalAmount} VND`);

        const isSuccess = paymentMethod.pay(totalAmount);

        if (isSuccess) {
            console.log(`-> Chức mừng! Thanh toán thành công. Đăng làm trống giỏ hàng.`);
            this.items = [];
        } else {
            console.log(`${isSuccess}`);
            console.log(`-> Giao dịch thất bại. Vui lòng thử lại.`);
        }
    }
}