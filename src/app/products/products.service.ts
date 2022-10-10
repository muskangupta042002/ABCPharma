import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Product } from '../product-detail/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Inject the HttpClient object to the constructor
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    //make a GET call to "http://localhost:3000/products" 
    //replace of() with relevant data returned by the API
    return this.http.get<Product[]>('http://localhost:3000/products').pipe(
      tap((data:any)=>console.log('Data Fetched:' + JSON.stringify(data)))
    );;
  }
}
