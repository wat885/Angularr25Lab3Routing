import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component'

import { BackendService } from './backend.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo2';

  // constructor(private backendService: BackendService) { }

  // @ViewChild('productList', { static: true })
  // productList: ProductListComponent;

  ngOnInit(): void {
    // this.productList.products = this.backendService.getProducts();

    // this.productList.products = [
    //   { name: 'ส้มโอ', price: 111 },
    //   { name: 'แตงโม', price: 222 },
    //   { name: 'มะพร้าวนํ้าหอม', price: 333 }
    // ]


  }

}
