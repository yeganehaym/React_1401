export class ProductService{

    allProducts=[
        {
           id:1,
           title:'Bag',
           company:'LG',
           price:25000000,
           discount:10,
           image:'/images/bag.webp'
        },
        {
            id:2,
            title:'Book',
            company:'LG',
            price:360000,
            discount:10,
            image:'/images/book.webp'
        },
        {
            id:3,
            title:'Laptop',
            company:'Asus',
            price:120000,
            discount:10,
            image:'/images/laptop.webp'
        },
        {
            id:4,
            title:'shoes',
            company:'Adidas',
            price:10000,
            discount:10,
            image:'/images/shoes.webp'
        },
        {
            id:5,
            title:'Watch',
            company:'CK',
            price:25000000,
            discount:10,
            image:'/images/watch.webp'
        },
        {
            id:6,
            title:'TV',
            company:'LG',
            price:25000000,
            discount:10,
            image:'/images/book.webp'
        }
    ]
    getProducts=(pageNumber)=>{

        const pageSize=3;
        const skip=(pageNumber-1)*pageSize;

        const products=[...this.allProducts];
        const p=[];
        for(var i=skip;i<(skip + pageSize);i++)
        {
            if(products[i]==undefined)
                break;
            p.push(products[i]);
        }
        return p;
    }
}