import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service'
import { Product } from '../product-detail/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProduct!: Product[];
  displaysearch: boolean = false;
  searchedProduct!: Product;
  errorMessage!: string;
  showError: boolean = false;
  searchmed!:any;
  //Inject the Router and ProductsService object to the constructor
  constructor(private route:Router , private productsService : ProductsService) {

  }

  // implement getSpecificProducts() that will filter the details of the specific product registed for from the product list
  getSpecificProducts(val:any) {    

    //implement call to getAllProducts() in productsService
    //return
    this.displaysearch=true;
    let g=false;
    for(let product of this.allProduct){
      if(product.name.toLowerCase()==val.toLowerCase){
        this.searchedProduct=product;
        this.searchmed="Searched for "+val;
        this.showError=false;
        g=true;
      }
      if(!g){
        //this.searchedProduct=null;
        this.showError=true;
        this.errorMessage="Sorry this medicine not manufactured by XYZpharma";
      }
    }
    
  }
  ngOnInit() {
    //code to display all product on load of product page
      this.productsService.getAllProducts().subscribe((data)=>
      this.allProduct=data);
  }

  viewDetails(val:any) {
    // do programatically navigation to product-detail component, passing the product selected received as parameter of viewDetails()
    this.route.navigate(['/productDetail',val]);
  }
  
}


