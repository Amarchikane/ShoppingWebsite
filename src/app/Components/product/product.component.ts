import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { productData } from '../../objects/productData';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../product-card/product-card.component";
import { FormsModule } from '@angular/forms';

interface ChecklistItem {
  text: string;
  isChecked: boolean;
}

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [CommonModule, HttpClientModule, RouterLink, ProductCardComponent ,FormsModule]
})
export class ProductComponent implements OnInit {

filterProduct() {
  this.product = this.productDataStatic;
}



  filterProducts(category: String) {
  this.product=this.productDataStatic.filter(a=>a.category==category)
}
  selectedSort: string = 'name';
    category: Set<String>=new Set();// Default sort criteria
  sortProducts(criteria: string) {
    if (criteria=="price") {
          this.product.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (criteria=="name") {
          this.product.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
    }else if(criteria=="nameacc") {
      this.product.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        } else {
          return 0;
        }
        });
      } else {
        this.product.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });
      }

    }

  product: productData[] =  [];
    productDataStatic: productData[] = [];
  ngOnInit() {
    this.getProductData();
    // this.putProductData();
  }
  constructor(private http: HttpClient) {

  }
  getProductData() {
    this.http.get<any>('https://dummyjson.com/products') // Replace with your JSON file URL
      .subscribe(data => {
        this.product = data["products"];
        this.productDataStatic = this.product;
             this.category =new Set(this.product.map(p=>p.category));
      });

  }

  searchTerm: string = '';
  Suggestion: Set<String>=new Set();
  filterProductsOnsearch(term: String) {
    if (term=="") {
      this.product = this.productDataStatic;
    } else {
          this.Suggestion = new Set(this.productDataStatic.filter(a => a.title.toLowerCase().includes(term.toLowerCase())).map(a=>a.title));

       this.product =this.productDataStatic.filter(a=> a.title.toLowerCase().includes(term.toLowerCase()) || a.description.toLowerCase().includes(term.toLowerCase())
       )
    }

  }
  onSubmit() {
    if (this.searchTerm=="") {
      this.product = this.productDataStatic;
    } else {
       this.product =this.productDataStatic.filter(a=> a.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || a.description.toLowerCase().includes(this.searchTerm.toLowerCase())
       )
    }
  }
}
