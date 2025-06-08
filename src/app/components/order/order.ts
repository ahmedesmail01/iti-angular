import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Home } from '../home/home';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, Home],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCategoryId: number = 0;
  categories: ICategory[];
  recievedTotalPrice: number = 0;

  constructor() {
    this.categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];
  }

  calculateTotalPrice(top: number) {
    this.recievedTotalPrice = top;
  }

  changeCat() {
    this.selectedCategoryId = 2;
  }
}
