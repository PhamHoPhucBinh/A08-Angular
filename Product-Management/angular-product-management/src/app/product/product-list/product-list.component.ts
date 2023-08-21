import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  category: Category;
  categories: Category[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  selectedCategory: string = 'all'; // Danh mục được chọn từ dropdown
  filteredProducts: Product[] = [];
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      console.log();
    });
    this.getAllCategory();
  }
  getPaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  canGoToPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  canGoToNextPage(): boolean {
    const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    return this.currentPage < totalPages;
  }
  filterProductsByCategory() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category.categoryName === this.selectedCategory);
    }
  }
  private getAllCategory() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
