import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {Gender} from "../../model/gender";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute} from "@angular/router";
import {GenderService} from "../../service/gender.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  p: number = 1;
    public students: Student[];
  genders: Gender[];
  private searchStudentForm: FormGroup;
  public msg: string = "";

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute, private genderService: GenderService) {
    this.searchStudentForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.getAllGender();
    this.getAllStudent()
  }

  private getAllGender() {
    this.genderService.getAllGender().subscribe((data) => {
      this.genders = data;
    })
  }
  getAllStudent() {
    this.studentService.getAllStudent().subscribe(data => {
      this.students = data;
    });
  }

  delete(id: number, studentName: string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      document.getElementById('row' + id).remove();
      this.msg = "successfully deleted employee " + studentName + "!";
    })
  }

  getSearchStudent() {
    const formValue = this.searchStudentForm.value;
    this.studentService.searchStudent(formValue.name, formValue.gender).subscribe((data) => {
      this.students = data;
    })
  }

  onSubmit() {
    const formValue = this.searchStudentForm.value;
    this.studentService.searchStudent(formValue.name, formValue.gender).subscribe((data) => {
    })
  }
}
