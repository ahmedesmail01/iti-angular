import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../directives/highlight-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, HighlightCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products: IProduct[];
  felteredProducts: IProduct[];
  categories: ICategory[];
  totalBuyPrice: number = 0;
  selectedCategoryId: number = 0;
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        imageUrl:
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        imageUrl:
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        categoryId: 2,
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description 3',
        price: 300,
        imageUrl:
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        categoryId: 1,
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'Description 4',
        price: 400,
        imageUrl:
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        categoryId: 2,
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'Description 5',
        price: 500,
        imageUrl:
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        categoryId: 1,
      },
      {
        id: 6,
        name: 'Product 6',
        description: 'Description 6',
        price: 600,
        imageUrl:
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        categoryId: 2,
      },
    ];
    this.felteredProducts = this.products;

    this.categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];
  }

  buy(count: string, price: number) {
    this.totalBuyPrice += +count * price;
  }
  changeCat() {
    this.selectedCategoryId = 2;
  }

  felterProducts() {
    if (this.selectedCategoryId == 0) {
      this.felteredProducts = this.products;
    } else {
      this.felteredProducts = this.products.filter(
        (p) => p.categoryId == this.selectedCategoryId
      );
    }
  }
}
