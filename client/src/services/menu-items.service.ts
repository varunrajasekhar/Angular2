import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuItemService {
  _url = 'http://localhost:9090/api/getMenuItemsById';
  constructor(private http: HttpClient) {
    
  }
  getMenuItems(id) {
    return this.http.get<any>(this._url, id)
  }
}

export default MenuItemService;