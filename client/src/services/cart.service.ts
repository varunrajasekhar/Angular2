import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  // _url = 'http://localhost:9090/api/getMenuItemsById';
  constructor(private http: HttpClient) {
    
  }
  // getProducts(id) {
  //   return this.http.get<any>(this._url, id)
  // }

  addProductToCart() {

  }

  removeProductFromCart() {

  }

  calculateTotal() {

  }

  


}

export default CartService;