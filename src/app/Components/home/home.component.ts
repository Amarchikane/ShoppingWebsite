import { Component, OnInit } from '@angular/core';
import { productData } from '../../objects/productData';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  product: productData[] = [];
  category: Set<String>=new Set();
  ngOnInit() {
    this.getProductData();

  }
  constructor(private http: HttpClient) {

  }
  getProductData() {
    this.http.get<any>('https://dummyjson.com/products')
      .subscribe(data => {
        this.product = data["products"];
      this.category =new Set(this.product.map(p=>p.category));
      });

  }
  flag: boolean = true;
  filterbycategory(category: String) {
    this.flag = true;
return new Set(this.product.filter(f => f.category == category).map(p=>p.thumbnail));
}
flagvalue(arg0: boolean) {
 this.flag = arg0;
}

}
