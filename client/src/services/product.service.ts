import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  _url = 'http://localhost:9090/api/getProductsById';
  constructor(private http: HttpClient) {
    
  }
  getProducts(id) {
    return this.http.get<any>(this._url, id)
  }
}

export default ProductService;