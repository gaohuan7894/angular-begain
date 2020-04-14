import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {products} from "../products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  constructor(
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log(window.innerWidth)
    console.log(self.innerWidth)
    this.items.push(products[0]);
    if(this.cartService.getItems().length>0){
      this.items = this.cartService.getItems();
    }
  }

}
