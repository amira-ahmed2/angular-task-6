import { Injectable } from '@angular/core';
import { from, Observable, of, Subscription, UnsubscriptionError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsserverService {
adslist:string[]
  constructor() {
  this.adslist=["black friday 20%","red friday 50%","sale all 20%"];

  }
  // day5 ex 7
   getads(intervalsacand:number):Observable<string>{
    return new Observable<string>((observable)=>{
      let count=0
      let adstimer=setInterval(()=>{
        if(count==this.adslist.length){
          observable.complete()
                 }
        if(this.adslist[count]==""){
          observable.error("ads empty")
        }
        observable.next(this.adslist[count])
        count++
      },intervalsacand*1000); return{ unsubscribe(){clearInterval(adstimer)}
    }
    }
   )
  }
// tisting
  // getadsbuiltin():Observable<string>{
  //   return from(this.adslist)
  //   return of('20%','50%')

  // }

}
