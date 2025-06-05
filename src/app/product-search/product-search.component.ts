import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {

  constructor(private router:Router)
  {

  }
  doSearch(value:string)
  {
    
console.log("by key up")
this.router.navigateByUrl(`/search/${value}`);
  
}

}
