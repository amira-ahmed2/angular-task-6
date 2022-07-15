import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';
import { AdsserverService } from 'src/app/services/adsserver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  todayData:Date=new Date();

  ClientName:string="Amira"

   // class
  clStore:Store;
  // number id
  selectCategoryId:number=0;
  discount:DiscountOffers=DiscountOffers['10%']
ads!:string
  prodListOfCateg:IProduct[]=[];
newprod:object={}

adsapscriptin!:Subscription
  constructor(private getadds:AdsserverService) {
    this.discount;
    this.clStore=new Store("ITI",["alex","caeio"],"assets/download.png")


 }

  //  dayone 4
  IsPurshased:boolean=true;
  logotoggle (){
    this.IsPurshased=!this.IsPurshased
  }



   ngOnInit(): void {

 this.adsapscriptin= this.getadds.getads(1).subscribe({
    next:(data:string)=>{
      this.ads=data
    },
    error:(err:string)=>{
          console.log(err)
    },
    complete:()=>{
      console.log("ads finshed")
    }})



  }
  ngOnDestroy(): void {
    this.adsapscriptin.unsubscribe
  }


  // onsubmit(name:any,quantity:any,price:any,img:any,CateogryID:any){
  // this.productserveice.addproduct(name.value,parseInt(quantity.value),parseInt(price.value),img.value,parseInt(CateogryID.value))
  // console.log( this. productserveice)
  // }


}
