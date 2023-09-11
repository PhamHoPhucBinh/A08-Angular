import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  products = [
    {
      name: 'Iphone 14',
      description: 'Mô tả sản phẩm 1',
      price: 5000000,
      imageUrl: '/assets/images/iphone-14.jpg'
    },
    {
      name: 'OPPO Reno 10',
      description: 'Mô tả sản phẩm 2',
      price: 6000000,
      imageUrl: '/assets/images/oppo.jpg'
    },
    // Thêm các sản phẩm khác ở đây
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
