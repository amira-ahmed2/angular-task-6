import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, from, Observable, of, retry, Subscription, throwError, UnsubscriptionError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ICategory } from '../models/icategory';
import { IProduct } from '../models/iproduct';
import { Iuser } from './../models/iuser';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
private httpoptions ={}
  constructor(private httpclient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'content-Type':'application/json'
      })
    }
   }

  getallcategory ():Observable<ICategory[]>{
    return this.httpclient.get<ICategory[]>(`${environment.apibaseurl}/categories`)
  }

getallproduct():Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(`${environment.apibaseurl}/products`)
}
//use query string
getproductbycatgid(cateogryid:number):Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(`${environment.apibaseurl}/products?cateogryid=${cateogryid}`)
}
// use url
getproductbyproddetils(id:number):Observable<IProduct>{
  return this.httpclient.get<IProduct>(`${environment.apibaseurl}/products/${id}`)
}
// add new product
addNewproduct(newpro:IProduct):Observable<IProduct>{
return this.httpclient.post<IProduct>(`${environment.apibaseurl}/products`
                                ,JSON.stringify(newpro),
                                          this.httpoptions)
                                          .pipe(
                                            retry(3),catchError((err)=>{
                                              return throwError(()=>{
                                                return new Error('Error occured please try again.')
                                              })
                                            })
                                          )
}
// delete product
deleteproduct(id: number):Observable<void>{
  return this.httpclient.delete<void>(`${environment.apibaseurl}/products/${id}`)
  .pipe(retry(2),catchError((err)=>{
    return throwError(()=>{
      return new Error('Error occured please try again.')
    })
  }))
 }
 // update product
 getupdateproduct(id: number):Observable<IProduct>{
  return this.httpclient.get<IProduct>(`${environment.apibaseurl}/products/${id}`,this.httpoptions)

 }
 updateproduct(prd: IProduct):Observable<IProduct>{
  return this.httpclient.patch<IProduct>(`${environment.apibaseurl}/products/${prd.id}`,prd,this.httpoptions)

 }

// add new users
addNewusers(newuser:Iuser):Observable<Iuser>{
   var formDa:FormGroup;

  return this.httpclient.post<Iuser>(`${environment.apibaseurl}/users`
                                  ,JSON.stringify(newuser),
                                            this.httpoptions)
                                            // .pipe(
                                            //   retry(2),catchError((err)=>{
                                            //     return throwError(()=>{
                                            //       return new Error('Error occured please try again.')
                                            //     })
                                            //   })
                                            // )
  }
}
