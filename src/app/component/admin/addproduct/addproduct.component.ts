import { Component, OnInit } from '@angular/core';
import { ProductapiService } from 'src/app/services/productapi.service';
import { Router ,ActivatedRoute} from '@angular/router';
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
val:any;

  constructor(private router:Router ,private proservicrapi:ProductapiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.proservicrapi.getallcategory().subscribe(plist=>{
      this.CategoryList=plist
    })
    // ubdata
    let sub =this.route.params.subscribe(params=>{
      this.val=params['id']
    })
    console.log(this.val)
    this.proservicrapi.getupdateproduct(this.val).subscribe(data=>{
      this.newprd=data
    })
  }
  updatapro(){
    this.proservicrapi.updateproduct(this.newprd).subscribe(da=>{

    });
    this.router.navigate(['All'])
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
  change(){
    if (this.newprd.id) {
      this.updatapro()
    }else{
      this.Insertnewpro()
    }

  }

}
