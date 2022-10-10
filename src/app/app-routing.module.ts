import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {ProductsComponent} from './products/products.component';
import {InvestorsComponent} from './investors/investors.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'products',component:ProductsComponent},
  {path:'investors',component:InvestorsComponent},
  {path:'productDetail/:tabletName',component:ProductDetailComponent},
  { path: '**', redirectTo: 'home', pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
