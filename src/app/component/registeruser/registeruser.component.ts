import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductapiService } from 'src/app/services/productapi.service';
import { Iuser } from './../../models/iuser';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {
userform:FormGroup;
reguser:Iuser={}as Iuser ;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
// mobnumPattern = "^(011|012|010)[0-9]{10,}$";
  constructor(private formbuilder:FormBuilder,private proservicrapi:ProductapiService) {

    // form control

    this.userform=this.formbuilder.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      mobileNo:formbuilder.array([formbuilder.control('')],[Validators.required]),
      password:['',[Validators.required,Validators.minLength(6)]],
      address:this.formbuilder.group({
        city:['',[Validators.required]],
        street:['',[Validators.required]],
        postalCode:['',[Validators.required]]
      })
    })
  }
get fullName(){
  return this.userform.get('fullName');
}
get email(){
  return this.userform.get('email');
}
get mobileNo(){
  return this.userform.get('mobileNo')as FormArray;
}
get addresscity(){
  return this.userform.get('address.city');
}
get street(){
  return this.userform.get('address.street');
}
get postalCode(){
  return this.userform.get('address.postalCode');
}
get password(){
  return this.userform.get('password');
}
addMobile(){
  this.mobileNo.push(this.formbuilder.control(''))
}
remMobile(){
  // this.mobileNo.

}


Insertnewuser(){

  this.proservicrapi.addNewusers(this.userform.value).subscribe({
    next:(prd)=>{
      console.log(prd)
    },
    error:(err)=>{
      alert(err)
    }
  })
}
  ngOnInit(): void {

  }

}
