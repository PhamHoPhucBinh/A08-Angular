import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CustomerType} from "../../model/customerType";
import {Region} from "../../model/region";
import {UserNeed} from "../../model/userNeed";
import {DirectionNeed} from "../../model/directionNeed";
import {Condition} from "../../model/condition";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {RegionService} from "../../service/region.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {UserNeedService} from "../../service/user-need.service";
import {DirectionNeedService} from "../../service/direction-need.service";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConditionService} from "../../service/condition.service";
import {PostService} from "../../service/post.service";


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  categories: Category[] = [];
  regions: Region[] = [];
  customerTypes: CustomerType[] = [];
  userNeeds: UserNeed[] = [];
  directionNeeds: DirectionNeed[] = [];
  conditions: Condition[] = [];
  postForm: FormGroup;
  isFormValid = false;

  constructor(private router: Router,
              private postService: PostService,
              private categoryService: CategoryService,
              private regionService: RegionService,
              private customerTypeService: CustomerTypeService,
              private userNeedService: UserNeedService,
              private directionNeedService: DirectionNeedService,
              private conditionService: ConditionService) {

  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      id: new FormControl(),
      category: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
      condition: new FormControl('', [Validators.required]),
      userNeed: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required,Validators.min(20)]),
      directionNeed: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required,Validators.min(100000000)]),
      image: new FormControl('', [Validators.required]),


    });
    this.postForm.statusChanges.subscribe(status => {
      this.isFormValid = status === 'VALID';
    });
    this.getAllCategory();
    this.getAllRegion();
    this.getAllCustomerType();
    this.getAllCondition();
    this.getAllUserNeed();
    this.getAllDirectionNeed();
  }

  private getAllCategory() {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  private getAllRegion() {
    this.regionService.getAllRegion().subscribe((data) => {
      this.regions = data;
    });
  }

  private getAllCustomerType() {
    this.customerTypeService.getAllCustomerType().subscribe((data) => {
      this.customerTypes = data;
    });
  }

  private getAllCondition() {
    this.conditionService.getAllCondition().subscribe((data) => {
      this.conditions = data;
    });
  }

  private getAllUserNeed() {
    this.userNeedService.getAllUserNeed().subscribe((data) => {
      this.userNeeds = data;
    });
  }

  private getAllDirectionNeed() {
    this.directionNeedService.getAllDirectionNeed().subscribe((data) => {
      this.directionNeeds = data;
    });
  }

  submit() {
    const post = this.postForm.value;
    post.category = this.postForm.get('category').value;
    post.region = this.postForm.get('region').value;
    post.customerType = this.postForm.get('customerType').value;
    post.condition = this.postForm.get('condition').value;
    post.userNeed = this.postForm.get('userNeed').value;
    post.directionNeed = this.postForm.get('directionNeed').value;

    this.postService.savePost(post).subscribe(() => {
      alert('Create Successfully!');
      this.router.navigate(['/post/list']);
      // this.productForm.reset();
    }, e => console.log(e));
  }
}
