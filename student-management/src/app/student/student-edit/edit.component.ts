import {Component, OnInit} from '@angular/core';
import {Gender} from '../../model/gender';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {GenderService} from '../../service/gender.service';
import {Student} from '../../model/student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  genders: Gender[];
  id: number;
  studentForm: FormGroup;


  constructor(private studentService: StudentService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private genderService: GenderService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllGender();
  }

  private getProduct(id: number) {
    return this.studentService.findById(id).subscribe(student => {
      this.studentForm = new FormGroup({
        studentName: new FormControl(student.studentName),
        phone: new FormControl(student.phone),
        address: new FormControl(student.address),
        email: new FormControl(student.email),
        gender: new FormControl(student.gender)
      });
    });
  }

  getAllGender() {
    this.genderService.getAllGender().subscribe(genders => {
      this.genders = genders;
    });
  }

  editStudent(id: number) {
    const student = this.studentForm.value;
    student.gender = this.studentForm.get('gender').value;
    this.studentService.editStudent(id, student).subscribe(() => {
      alert('update successfully');
      this.router.navigate(['/student/list']);
    });
  }

}
