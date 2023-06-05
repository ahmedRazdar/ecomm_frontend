import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/SellerServices/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService){}

  signUp(data:object):void{
    console.warn(data);
    // this.seller.userSignUp();
  }

}
