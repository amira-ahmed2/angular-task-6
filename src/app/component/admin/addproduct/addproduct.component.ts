import { Component, OnInit } from '@angular/core';
import { ProductapiService } from 'src/app/services/productapi.service';
import { Router } from '@angular/router';
import { IProduct } from './../../../models/iproduct';
import { ICategory } from './../../../models/icategory';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  CategoryList:ICategory[]=[]
// selectcardid:number=0;
newprd:IProduct = {} as IProduct;
  constructor(private router:Router ,private proservicrapi:ProductapiService) { }

  ngOnInit(): void {
    this.proservicrapi.getallcategory().subscribe(plist=>{
      this.CategoryList=plist
    })
  }
  Insertnewpro(){

    this.proservicrapi.addNewproduct(this.newprd).subscribe({
      next:(prd)=>{
        this.router.navigate(['/products'])
      },
      error:(err)=>{
        alert(err)
      }
    })
  }

}
