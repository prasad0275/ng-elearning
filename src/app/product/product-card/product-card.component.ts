import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  list: any[] = ['a','b','c','d','e','f','h'];
  constructor() { }

  ngOnInit(): void {
  }

}
