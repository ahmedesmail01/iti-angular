import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../directives/highlight-card';
import { StaticProducts } from '../../services/static-products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, HighlightCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnChanges {
  products: IProduct[];
  @Input() recievedCatId: number = 0;
  felteredProducts: IProduct[];
  totalBuyPrice: number = 0;
  @Output() onTotalPriceChange: EventEmitter<number>;
  constructor(private _staticProducts: StaticProducts, private router: Router) {
    this.products = this._staticProducts.getAllProducts();
    this.felteredProducts = this.products;
    this.onTotalPriceChange = new EventEmitter<number>();
  }

  buy(count: string, price: number) {
    this.totalBuyPrice += +count * price;
    this.onTotalPriceChange.emit(this.totalBuyPrice);
  }

  ngOnChanges(): void {
    // this.felterProducts();
    this.felteredProducts = this._staticProducts.getProductsByCategoryId(
      this.recievedCatId
    );
  }

  navigateToDetails(id: number) {
    this.router.navigateByUrl(`/details/${id}`);
  }

  // felterProducts() {
  //   if (this.recievedCatId == 0) {
  //     this.felteredProducts = this.products;
  //   } else {
  //     this.felteredProducts = this.products.filter(
  //       (p) => p.categoryId == this.recievedCatId
  //     );
  //   }
  // }
}
