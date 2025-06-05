import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

products:Product[]=[];
currentCategoryId:number=1;

searchMode=false;
constructor(private productService:ProductService,private route:ActivatedRoute){}

// ngOnInit(): void {
//     this.productService.getProducts().subscribe(data => {
//       this.products = data;
//     })
//   }
// }	

ngOnInit(): void {

  this.route.paramMap.subscribe(()=>{
    this.listProducts();
  })

}

listProducts()
{
this.searchMode=this.route.snapshot.paramMap.has('keyword');

console.log("search Mode "+this.searchMode);
if(this.searchMode)
{
  this.handleSearchProducts();
}
 else{
  this.handleListProducts();
 }
}

handleSearchProducts()
{

  const searchKeyword:string=this.route.snapshot.paramMap.get('keyword')!;
  console.log("search dataa");
  this.productService.searchProduct(searchKeyword).subscribe(data=>{
    this.products = data;
  })

}

handleListProducts()
{
  const hasCategoryId:boolean =  this.route.snapshot.paramMap.has("id");

  if(hasCategoryId){
 
   console.log("cmnig inside")
   this.currentCategoryId=+this.route.snapshot.paramMap.get('id')!;
 
  }
  else{
   this.currentCategoryId = 1;
  }
 
 this.productService.getProductsByCategory(this.currentCategoryId).subscribe(data=>{
   this.products = data;
   console.log(data);
 })
 
}


}
