import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './SharedClassesAndTypes/Iproduct'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Labs';
  displayProducts: boolean = false;
  appProducts: IProduct[] = [];
  @ViewChild(ProductsComponent) productComponent!: ProductsComponent;

  showProducts(): void {
    this.displayProducts = !this.displayProducts;
    this.appProducts = this.productComponent.renderValues();
  }

}
