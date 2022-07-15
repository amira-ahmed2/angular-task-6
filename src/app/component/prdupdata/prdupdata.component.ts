import { Component, OnInit } from '@angular/core';
import { ProductapiService } from 'src/app/services/productapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './../../models/iproduct';

@Component({
  selector: 'app-prdupdata',
  templateUrl: './prdupdata.component.html',
  styleUrls: ['./prdupdata.component.scss']
})
export class PrdupdataComponent implements OnInit {
val:any;
prod:IProduct={}as IProduct
pro:IProduct[]=[]
  constructor(private router:Router,private route: ActivatedRoute,private prodapi:ProductapiService) { }

  ngOnInit(): void {
    let sub =this.route.params.subscribe(params=>{
      this.val=params['id']
    })
    console.log(this.val)
    this.prodapi.getupdateproduct(this.val).subscribe(data=>{
      this.prod=data
    })

  }
  updatapro(){
    this.prodapi.updateproduct(this.prod).subscribe(da=>{

    });
    this.router.navigate(['All'])
  }


}
