import { Component, Input } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { productData } from '../../objects/productData';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-related-products',
    standalone: true,
    templateUrl: './related-products.component.html',
    styleUrl: './related-products.component.css',
    imports: [CommonModule,ProductCardComponent]
})
export class RelatedProductsComponent {
  @Input() Relatedproduct: productData[]=[]
  constructor() {

  }
}
