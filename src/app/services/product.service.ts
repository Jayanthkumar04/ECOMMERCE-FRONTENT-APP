import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = "http://localhost:8080/api/products";

  constructor(private httpClient:HttpClient) {


  }

  getProductsByCategory(categoryId:number):Observable<Product[]>{

    const searchUrl = `${this.apiUrl}/search/findByCategoryId?id=${categoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl)
                   .pipe(map(response=> response._embedded.products));


  }

    getProducts(): Observable<Product[]>{

    return this.httpClient.get<GetResponse>(this.apiUrl)
                   .pipe(map(response=> response._embedded.products));

  }


}

interface GetResponse{

    _embedded: {

      products:Product[];

    }

}
