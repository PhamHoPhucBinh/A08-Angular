import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../model/teacher";
import {Post} from "../../model/post";
import {Gender} from "../../model/gender";
import {Category} from "../../model/category";
import {Region} from "../../model/region";
import {CustomerType} from "../../model/customerType";
import {UserNeed} from "../../model/userNeed";
import {Condition} from "../../model/condition";
import {DirectionNeed} from "../../model/directionNeed";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PostService} from "../../service/post.service";
import {CategoryService} from "../../service/category.service";
import {RegionService} from "../../service/region.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {UserNeedService} from "../../service/user-need.service";
import {ConditionService} from "../../service/condition.service";
import {DirectionNeedService} from "../../service/direction-need.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  p = 1;
  public posts: Post[];
  categories: Category[];
  regions: Region[];
  customerTypes: CustomerType[];
  userNeeds: UserNeed[];
  conditions: Condition[];
  directionNeeds: DirectionNeed[];
  searchPostForm: FormGroup;

  constructor(private router: Router,
              private dialog: MatDialog,
              private postService: PostService,
              private categoryService: CategoryService,
              private regionService: RegionService,
              private customerTypeService: CustomerTypeService,
              private userNeedService: UserNeedService,
              private conditionService: ConditionService,
              private directionNeedService: DirectionNeedService) {
    this.searchPostForm = new FormGroup({
      price: new FormControl(''),
      area: new FormControl(''),
      directionNeed: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllRegion();
    this.getAllCustomerType();
    this.getAllCondition();
    this.getAllUserNeed();
    this.getAllDirectionNeed();
    this.getAllPost();
  }

  onSubmit() {
    const formValue = this.searchPostForm.value;
    this.postService.searchPost(formValue.area, formValue.price, formValue.directionNeed).subscribe((data) => {
      this.posts = data;
    });
  }

  getAllPost() {
    this.postService.getAllPost().subscribe(data => {
        this.posts = data;
      }
    );
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
}
