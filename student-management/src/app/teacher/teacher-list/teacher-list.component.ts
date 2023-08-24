import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../model/teacher";
import {Gender} from "../../model/gender";
import {Education} from "../../model/education";
import {FormControl, FormGroup} from "@angular/forms";
import {TeacherService} from "../../service/teacher.service";
import {EducationService} from "../../service/education.service";
import {GenderService} from "../../service/gender.service";
import {Router} from "@angular/router";
import {DeleteConfirmationDialogComponent} from "../../delete-confirmation-dialog/delete-confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  p = 1;
  public teachers: Teacher[];
  genders: Gender[];
  educations: Education[];
  searchTeacherForm: FormGroup;

  constructor(private teacherService: TeacherService,
              private educationService: EducationService,
              private genderService: GenderService,
              private router: Router,
              private dialog: MatDialog) {
    this.searchTeacherForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(0)
    });
  }

  ngOnInit(): void {
    this.getAllEducation();
    this.getAllTeacher();
    this.getAllGender();
  }

  getAllTeacher() {
    this.teacherService.getAllTeacher().subscribe(data => {
        this.teachers = data;
      }
    );
  }

  private getAllGender() {
    this.genderService.getAllGender().subscribe((data) => {
      this.genders = data;
    });
  }

  private getAllEducation() {
    this.educationService.getAllEducation().subscribe((data) => {
      this.educations = data;
    });
  }

  onSubmit() {
    const formValue = this.searchTeacherForm.value;
    this.teacherService.searchTeacher(formValue.name, formValue.gender).subscribe((data) => {
      this.teachers = data;
    });
  }

  openDeleteConfirmationDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Delete the student
        this.teacherService.deleteTeacher(id).subscribe(
          () => {
            // Successfully deleted
            alert('delete successfully');
            this.teacherService.getAllTeacher().subscribe(data => {
              this.teachers = data;
            });
          },
          error => {
            console.error('Error deleting teacher:', error);
            // Handle the error, e.g., show an error message to the user
          }
        );
      }
    });
  }
}

