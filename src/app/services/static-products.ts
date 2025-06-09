import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProducts {
  products: IProduct[];

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
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(productId: number): IProduct | undefined {
    return this.products.find((p) => p.id == productId);
  }

  getProductsByCategoryId(categoryId: number): IProduct[] {
    if (categoryId == 0) {
      return this.products;
    } else {
      return this.products.filter((p) => p.categoryId == categoryId);
    }
  }
}
