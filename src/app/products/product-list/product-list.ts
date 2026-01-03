import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Products</h2>

    <div *ngFor="let p of products"
         style="border:1px solid #ccc; padding:10px; margin:10px">
      <h4>{{ p.name }}</h4>
      <p>₹{{ p.price }}</p>

      <a [routerLink]="['/products', p.id]">View</a>
    </div>
  `
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'iPhone 15', price: 80000 },
    { id: 2, name: 'Samsung S23', price: 70000 },
    { id: 3, name: 'OnePlus 12', price: 60000 }
  ];
}
