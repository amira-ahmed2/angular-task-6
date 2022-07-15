import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { ShadowDirective } from './directive/shadow.directive';
import { OrderMasterComponent } from './component/order-master/order-master.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './component/admin/addproduct/addproduct.component';
import { RegisteruserComponent } from './component/registeruser/registeruser.component';
import { PrdupdataComponent } from './component/prdupdata/prdupdata.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    SideMenuComponent,
    ShadowDirective,
    OrderMasterComponent,
    HomeComponent,
    NotfoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddproductComponent,
    RegisteruserComponent,
    PrdupdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
