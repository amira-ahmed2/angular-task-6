import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { every } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';
import { ProductApiService } from 'src/app/product-api.service';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit,OnChanges {
  prodList:IProduct|undefined=undefined

  todayData:Date=new Date();

@Input() resreivedcardid:number=0;
idc:number=1
@Input() resreivedCatID:number=0;
selectCategoryId:number=0;
prodListOfCateg:IProduct[]=[];

prd:IProduct|undefined=undefined;
 selectcardid:number=0;

constructor(private router:Router,private prodapi:ProductapiService) {

 }


 ngOnChanges(): void {


//day5
if(this.resreivedCatID==0){
  this.prodapi.getallproduct().subscribe(plist=>{
    this.prodListOfCateg=plist
  })

}else{this.prodapi.getproductbycatgid(this.resreivedCatID).subscribe(prodlist=>{
  this.prodListOfCateg=prodlist
})
}
}
ngOnInit(): void {
  this.prodapi.getallproduct().subscribe(plist=>{
    this.prodListOfCateg=plist
  })

}


     itemfun(index:number,item:IProduct){
      return item.id;
    }
    updatatocart4(id:number){
      this.router.navigate(['./All',id])
      console.log(id)
      }

deleteproduct(id:number){
if(confirm("do is delete this product?")){
  this.prodapi.deleteproduct(id).subscribe(() => {
    alert(`delete product ${id}`)  });
    this.prodapi.getallproduct().subscribe((res)=>{
      this.prodListOfCateg=res
    })
    }else{
      alert("you cancel delete")
    }
}
editproduct(id:number){
  this.router.navigate(['./edit',id])

}

}
