import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProducts } from '../../services/static-products';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  currentId: number = 0;
  CurrentProduct: IProduct | undefined = undefined;
  idsArr: number[] = [];
  currentIdIndex: number = 0;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _staticProducts: StaticProducts,
    private _location: Location,
    private _router: Router
  ) {
    this.idsArr = this._staticProducts.getAllProducts().map((p) => p.id);
    this.currentIdIndex = this.idsArr.indexOf(this.currentId);
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param) => {
      this.currentId = Number(param.get('id'));
      this.CurrentProduct = this._staticProducts.getProductById(this.currentId);
    });

    // this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    // this.CurrentProduct = this._staticProducts.getProductById(this.currentId);
  }

  goBack() {
    this._location.back();
  }
  goNext() {
    this.currentIdIndex = this.idsArr.indexOf(this.currentId);
    if (this.currentIdIndex !== this.idsArr.length - 1) {
      this._router.navigateByUrl(
        `details/${this.idsArr[this.currentIdIndex + 1]}`
      );
    }
  }
  goPrev() {
    this.currentIdIndex = this.idsArr.indexOf(this.currentId);
    if (this.currentIdIndex !== 0) {
      this._router.navigateByUrl(
        `details/${this.idsArr[this.currentIdIndex - 1]}`
      );
    }
  }
}
