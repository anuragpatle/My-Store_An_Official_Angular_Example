import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service'

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = products;
  product;

  constructor(private route: ActivatedRoute,  private cartService: CartService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log("product id: " + params.get('productId'));
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
