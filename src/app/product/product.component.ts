import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"AAAA",1.88,3.5,"这是第一个商品",["angular","vue"]),
      new Product(2,"BBBB",2.88,4.5,"这是第二个商品",["angular","vue"]),
      new Product(3,"CCCC",3.88,3.5,"这是第三个商品",["angular","vue"]),
      new Product(4,"DDDD",4.88,2.5,"这是第四个商品",["angular","vue"]),
      new Product(5,"EEEE",5.88,3.5,"这是第五个商品",["angular","vue"]),
      new Product(6,"FFFF",6.88,1.5,"这是第六个商品",["angular","vue"])
    ]
  }


}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
