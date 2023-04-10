import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../SharedClassesAndTypes/Iproduct';
import { Router } from '@angular/router';
Router

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  Products: any[] = [
    { "id": 1, "name": "Car1", "quantity": 10, "price": 155, "img": "/assets/download.jpg" },
    { "id": 2, "name": "Car2", "quantity": 20, "price": 15055, "img": "/assets/download.jpg" },
    { "id": 3, "name": "Car3", "quantity": 30, "price": 14560, "img": "/assets/download.jpg" }
  ]
  constructor() { }
  getProducts() {
    return this.Products
  }
  getProductByID(prdId: number): IProduct | null {

    if (!isNaN(prdId)) {
      const id = Number(prdId);
      return this.Products.find(p => p.id == id);
    }
    else {
      return null
    }
  }
}
