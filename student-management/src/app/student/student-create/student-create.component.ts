import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {Gender} from '../../model/gender';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../../service/student.service';
import {GenderService} from '../../service/gender.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  genders: Gender[] = [];
  studentForm: FormGroup;
  isFormValid = false;

  constructor(private router: Router,
              private studentService: StudentService,
              private genderService: GenderService) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(),
      studentName: new FormControl('', [Validators.required, Validators.pattern('^([A-Z][a-z]+)( [A-Z][a-z]+)+$')]),
      gender: new FormControl(0, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
    this.studentForm.statusChanges.subscribe(status => {
      this.isFormValid = status === 'VALID';
    });
    this.getAllGender();
  }

  getAllGender() {
    this.genderService.getAllGender().subscribe((data) => {
      this.genders = data;
    });
  }

  submit() {
    const student = this.studentForm.value;
    student.gender = this.studentForm.get('gender').value;
    this.studentService.saveStudent(student).subscribe(() => {
      alert('Create Successfully!');
      this.router.navigate(['/student/list']);
      // this.productForm.reset();
    }, e => console.log(e));
  }

}
