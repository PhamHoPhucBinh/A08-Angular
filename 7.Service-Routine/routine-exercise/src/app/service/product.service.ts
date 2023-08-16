import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'iphone 11',
    price: 5000000,
    description: '80%'
  }, {
    id: 2,
    name: 'iphone 12',
    price: 9000000,
    description: '90%'
  }, {
    id: 3,
    name: 'iphone 13',
    price: 15000000,
    description: 'like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
