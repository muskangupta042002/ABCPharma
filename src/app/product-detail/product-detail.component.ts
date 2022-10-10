import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductDetailService } from './product-detail.service';
import { Product } from './product'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //Inject the ActivatedRoute and ProductDetailService object to the constructor
  constructor(private route: ActivatedRoute, private productDetailService: ProductDetailService) { }

  tabletName!: string;
  productDetail!: Product[];

  ngOnInit() {
    //resolve the route parameter and make a call to the getTabDetail() of productDetailService
    this.tabletName=this.route.snapshot.params['tabletName'];
    this.productDetailService.getTabDetail(this.tabletName).subscribe((data) => this.productDetail=data)
    
  }

  //DHBPG1573D
}
