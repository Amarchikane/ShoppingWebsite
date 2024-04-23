import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productData } from '../../objects/productData';
import { ProductCardComponent } from "../product-card/product-card.component";
import { RelatedProductsComponent } from "../related-products/related-products.component";

@Component({
    selector: 'app-single-product',
    standalone: true,
    templateUrl: './single-product.component.html',
    styleUrl: './single-product.component.css',
    imports: [CommonModule, HttpClientModule, ProductCardComponent, RelatedProductsComponent]
})
export class SingleProductComponent implements OnInit{
id : any;
 product: productData[] = [];
Relatedproduct: productData[] = [];
    constructor(private activatedRoute: ActivatedRoute,private http: HttpClient) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.searchProduct(this.id)

  }
  fetchData(searchTerm: string) {
  this.http.get<any>(`https://dummyjson.com/products/${searchTerm}`)
    .subscribe(data => {
      this.product = [ data ];
        const firstProductTestValue: String = this.product[0]?.category || "";
    if (firstProductTestValue != "") {
      this.searchProductRelatedproduct(firstProductTestValue)
      this.Relatedproduct = this.Relatedproduct.filter(product => product.id !== this.id);
    }
    });
}
searchProduct(term: Number) {
  this.fetchData(`${term}`); // Example query parameter
  }
   fetchDataRelatedproduct(searchTerm: string) {
  this.http.get<any>(`https://dummyjson.com/products/category/${searchTerm}`)
    .subscribe(data => {
      this.Relatedproduct = data["products"];
    });
}
searchProductRelatedproduct(term: String) {
  this.fetchDataRelatedproduct(`${term}`); // Example query parameter
}
  discountcalculater(arg0: any, arg1: any) {
    const ta:any = arg0 - (arg0*arg1/100);

return  ta.toFixed(2);
  }
    discountreminder(arg0: any, arg1: any) {
    const ta:any = (arg0*arg1/100);

return  ta.toFixed(2);
}
}
