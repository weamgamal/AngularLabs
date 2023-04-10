import { Component } from '@angular/core';
import { DiscountOffers } from '../SharedClassesAndTypes/Discount';
import { IProduct } from '../SharedClassesAndTypes/Iproduct'
import { ICategory } from '../SharedClassesAndTypes/Icategory'
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent {
  Discount: DiscountOffers = DiscountOffers["NoDiscount"];;
  StoreName: string = "Store";
  StoreLogo: string = "/assets/download.jpg";
  Products: IProduct[] = [];
  SingleProduct: any = {}
  Categories: ICategory[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' }

  ];
  ProdId!: number
  selecteId: any;
  CustomerName: string = "";
  IsPurchased: boolean = false;
  Buy = false;
  DoBuy() {
    if (this.Buy == true)
      this.Buy = false;
    else this.Buy = true;
  }


  constructor(private ProductServiceService: ProductServiceService
    , private _Router: Router,
    private _activatedRoute: ActivatedRoute

  ) {

  }
  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((parm: ParamMap) =>
      this.selecteId = parm.get("id"))
    this.Products = this.ProductServiceService.Products;
  }
  renderValues() {
    this.Products = this.ProductServiceService.Products;
    return this.ProductServiceService.Products;
  }

  getById(id: any) {
    this.SingleProduct = this.ProductServiceService.getProductByID(id);
  }

  showDetailes(Prodcut: IProduct) {
    this._Router.navigate(["/Product", Prodcut.id]);
  }
  
}



