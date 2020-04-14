import {Component, OnInit} from '@angular/core';

import {products} from '../products';
import {CartService} from "../cart.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    products = products;

    constructor(
        private cartService: CartService
    ) {
    }

    share() {
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('We will notify you');
    }

    buy(product){
        this.cartService.addToCart(product)
    }

    ngOnInit(): void {
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
