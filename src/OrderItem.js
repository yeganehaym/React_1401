export default class OrderItem
{

    constructor(name,price,discount,quantity){
        this.productName=name;
        this.price=price;
        this.discount=discount;
        this.quantity=quantity;
    }
    productName='';
    price=0;
    discount=0;
    quantity=0;

    finalPrice=()=>{
        
        const price=0;
        return this.price*this.quantity-this.discount;
        //return (this.price-this.discount)*this.quantity;
    }
}