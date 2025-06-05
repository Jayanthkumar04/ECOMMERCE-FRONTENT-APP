import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from '../common/category';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = "http://localhost:8080/api/product-category";

  constructor(private httpClient:HttpClient) {


  }

  getCategories()
  {
    return this.httpClient.get<GetResponse>(this.apiUrl)
                .pipe(map(response=> response._embedded.productCategory));
  }

}

interface GetResponse{

    _embedded: {

      productCategory:category[];

    }

}

