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
  isFormValid = false;

  constructor(private studentService: StudentService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private genderService: GenderService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getStudent(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllGender();
  }

  private getStudent(id: number) {
    return this.studentService.findById(id).subscribe(student => {
      this.studentForm = new FormGroup({
        studentName: new FormControl(student.studentName, [Validators.required, Validators.pattern('^([A-Z][a-z]+)( [A-Z][a-z]+)+$')]),
        phone: new FormControl(student.phone, [Validators.required]),
        address: new FormControl(student.address, [Validators.required]),
        email: new FormControl(student.email, [Validators.required,Validators.email]),
        gender: new FormControl(student.gender, [Validators.required])
      });
      this.studentForm.statusChanges.subscribe(status => {
        this.isFormValid = status === 'VALID';
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
