import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoryService } from './services/category.service';
import { category } from './common/category';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { ProductSearchComponent } from "./product-search/product-search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ProductCategoryComponent, ProductSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JayanthEcommerceFrontent';




}
