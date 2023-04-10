import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../SharedClassesAndTypes/Iproduct';
@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent implements OnInit {
  ProdID: any;
  Product: any;
  constructor(private activatedRoute: ActivatedRoute,
    private ProdService: ProductServiceService,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parm: ParamMap) => {
      this.ProdID = parm.get("id");
      this.Product = this.ProdService.getProductByID(this.ProdID);
    });
  }

  getNextProcut() {
    let Nextindex = parseInt(this.ProdID) + 1;
    this._router.navigate(['/Product', Nextindex])
  }
  getPreviousProcut() {
    let Previndex = parseInt(this.ProdID) - 1;
    this._router.navigate(['/Product', Previndex])
  }
  goToProducts(){
    this._router.navigate(['/Products',{id:this.ProdID}]);   
  }
}
