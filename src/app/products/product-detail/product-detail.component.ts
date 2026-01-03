import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Product Detail</h2>
    <p>Product ID: {{ productId }}</p>

    <a routerLink="/products">⬅ Back</a>
  `
})
export class ProductDetailComponent implements OnInit {

  productId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
