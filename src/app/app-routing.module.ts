import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { OrderMasterComponent } from './component/order-master/order-master.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { AddproductComponent } from './component/admin/addproduct/addproduct.component';
import { ProductComponent } from './component/product/product.component';
import { RegisteruserComponent } from './component/registeruser/registeruser.component';
import { PrdupdataComponent } from './component/prdupdata/prdupdata.component';
const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'All',component:OrderMasterComponent},
  {path:'All/:id',component:ProductDetailsComponent},
  {path:'NewProduct',component:AddproductComponent},
  {path:'edit/:id',component:PrdupdataComponent},

  ]},
  {path:'register',component:RegisteruserComponent},

  {path:'**',component:NotfoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
