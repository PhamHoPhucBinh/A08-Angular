import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {Gender} from '../../model/gender';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GenderService} from '../../service/gender.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from 'src/app/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  p = 1;
  public students: Student[];
  genders: Gender[];
  searchStudentForm: FormGroup;

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute,
              private genderService: GenderService, public dialog: MatDialog,
              private router: Router) {
    this.searchStudentForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(0)
    });
  }

  ngOnInit(): void {
    this.getAllGender();
    this.getAllStudent();
  }

  private getAllGender() {
    this.genderService.getAllGender().subscribe((data) => {
      this.genders = data;
    });
  }

  getAllStudent() {
    this.studentService.getAllStudent().subscribe(data => {
      this.students = data;
    });
  }

  delete(id: number, studentName: string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      document.getElementById('row' + id).remove();
    });
  }

  onSubmit() {
    const formValue = this.searchStudentForm.value;
    this.studentService.searchStudent(formValue.name, formValue.gender).subscribe((data) => {
      this.students = data;
    });
  }


  openDeleteConfirmationDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Delete the student
        this.studentService.deleteStudent(id).subscribe(
          () => {
            // Successfully deleted
            alert('delete successfully');
            this.router.navigate(['/student/list']);
          },
          error => {
            console.error('Error deleting student:', error);
            // Handle the error, e.g., show an error message to the user
          }
        );
      }
    });
  }
}
