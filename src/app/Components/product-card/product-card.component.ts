import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productData } from '../../objects/productData';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() product: productData = {
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: []
  };
  constructor() {

  }
  ngOnInit(): void {
  }
    discountcalculater(arg0: any, arg1: any) {
    const ta:any = arg0 - (arg0*arg1/100);

return  ta.toFixed(2);
}
}
