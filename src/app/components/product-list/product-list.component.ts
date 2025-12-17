import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';
  selectedProduct: Product | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('assets/products.json').subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterProducts(): void {
    const value = this.searchText.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }
}
