import { Component } from '@angular/core';
import { category } from '../common/category';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {

  categories:category[]=[];

  constructor(private categoryService:CategoryService)
  {

  }
  ngOnInit(): void {

    this.categoryService.getCategories().subscribe({
      next:(data)=>{
        this.categories=data;
      }
    })

  }

}
