import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {
  CategoryList:ICategory[]=[]
selectcardid:number=0;

  constructor(private prodapi:ProductapiService) {
  }

  itemfuncat(index:number,itemC:ICategory){
    return itemC.id
  }
  ngOnInit(): void {
    this.prodapi.getallcategory().subscribe(plist=>{
      this.CategoryList=plist
    })
  }


}
