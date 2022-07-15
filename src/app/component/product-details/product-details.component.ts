import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { Location } from '@angular/common';
import { findIndex } from 'rxjs';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit,OnChanges {

  constructor(private prodapi:ProductapiService,private router:Router,private snapdata:ActivatedRoute,private loca:Location) {

   }
  ngOnChanges(): void {
    }
  prd:IProduct|undefined=undefined;

  sendid:number=0
  proidlist:number[]=[]
  currendondex:number=0
  ngOnInit(): void {


// day5api
 this.snapdata.paramMap.subscribe(
  paramMap=>{
    this.currendondex=Number(paramMap.get('id'))
    this.prodapi.getproductbyproddetils(this.currendondex).subscribe(ids=>this.prd=ids)
}
  );


}
  goback(){
    this.loca.back();
  }

  // goprev(){
  //   this.currendondex=this.proidlist.findIndex((itemid)=>itemid==this.sendid)
  //   this.router.navigate(['/All',this.proidlist[--this.currendondex]])

  // }
  // gonext(){
  //   this.currendondex=this.proidlist.findIndex((itemid)=>itemid==this.sendid)
  //   this.router.navigate(['/All',this.proidlist[++this.currendondex]])
  // }

}

