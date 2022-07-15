export interface Iuser {
  fullName:string,
  email:string,
  mobileNo:string,
  address:{
      city:string,
      street:string,
      postalCode:number
  },
  password:string
}
