
export default class ProductC{
    
    name='';
    price=0;
    discount=0

    Sum=(a,b)=>{
        return a+b;
    }
    
    Multiply=(a,b)=>{
        return a*b;
    }

    FinalPrice=()=>this.price-this.discount;
    
}