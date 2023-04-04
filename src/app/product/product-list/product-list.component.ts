import { Component, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded = false;
  advanceSearchExpanded: boolean = false;
  products:any = [];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 8000)
  }
}
