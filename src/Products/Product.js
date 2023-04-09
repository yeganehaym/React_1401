export default class Product{

    constructor(code,name,price,discount,image) {
        this.code=code;
        this.name=name;
        this.price=price;
        this.discount=discount;
        this.image=image;
    }

code=0;
    name='';
    price=0;
    discount=0;
    image='';

    getFinalPrice=()=>{
        return this.price - (this.price*this.discount/100);
    }
}