import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/SellerServices/seller.service';
import { Router } from '@angular/router';
import { SignUpDto } from 'src/app/classes/SignUpDto';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signUp(data:SignUpDto):void{
    this.seller.userSignUp(data);
  }

}
