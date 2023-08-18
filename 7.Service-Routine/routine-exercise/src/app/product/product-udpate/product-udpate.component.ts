import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-udpate',
  templateUrl: './product-udpate.component.html',
  styleUrls: ['./product-udpate.component.css']
})
export class ProductUdpateComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(
    private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/product/list']);
    }, e => {
      console.log(e);
    });
  }
}
