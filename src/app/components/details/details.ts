import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { StaticProducts } from '../../services/static-products';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  currentId: number = 0;
  CurrentProduct: IProduct | undefined = undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _staticProducts: StaticProducts
  ) {}

  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.CurrentProduct = this._staticProducts.getProductById(this.currentId);
  }
}
