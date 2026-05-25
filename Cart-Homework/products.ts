export abstract class Product {
    constructor(
        public id: String,
        public name: String,
        protected basePrice: number, // Chỉ cho phép Class con truy cập
    ) {

    }

    abstract getFinalPrice(): number;
}

// SP vật lý kể thừa từ Product
export class PhysicalProduct extends Product {
    constructor(
        id: String, name: String, basePrice: number, public weightInKg: number
    ) {
        super(id, name, basePrice);
    }

    // Đa hình: tính giá theo công thức đề bài
    override getFinalPrice(): number {
        const shippingFee = this.weightInKg * 10000;
        return this.basePrice + shippingFee;
    }
}

// SP digital kế thừa từ Product
export class DigitalProduct extends Product {
    constructor(
        id: String, name: String, basePrice: number, public downloadLink: String
    ) { 
        super(id, name, basePrice) 
    }
    
    // Đa hình:  tính giá theo công thức đề bài
    override getFinalPrice(): number {
        return this.basePrice * 0.95;
    }
}
