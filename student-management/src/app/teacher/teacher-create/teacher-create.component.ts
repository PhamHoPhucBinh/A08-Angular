import {Component, OnInit} from '@angular/core';
import {Gender} from "../../model/gender";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GenderService} from "../../service/gender.service";
import {TeacherService} from "../../service/teacher.service";
import {Education} from "../../model/education";
import {EducationService} from "../../service/education.service";

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {
  genders: Gender[] = [];
  educations: Education[] = [];
  teacherForm: FormGroup;
  isFormValid = false;

  constructor(private router: Router,
              private teacherService: TeacherService,
              private genderService: GenderService,
              private educationService: EducationService) {
  }

  ngOnInit(): void {
    this.teacherForm = new FormGroup({
      id: new FormControl(),
      teacherName: new FormControl('', [Validators.required, Validators.pattern('^([A-Z][a-z]+)( [A-Z][a-z]+)+$')]),
      gender: new FormControl(0, [Validators.required]),
      // tslint:disable-next-line:max-line-length
      birthday: new FormControl('', [Validators.required, Validators.pattern('(?:\\d{1,2}[-/\\s]\\d{1,2}[-/\\s]\'?\\d{2,4})|(?:\\d{2,4}[-/\\s]\\d{1,2}[-/\\s]\\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\\s-/,]*?\\d{1,2}(?:\\s)*(?:rd|th|st)?(?:\\s)*[-/,]?(?:\\s)*\'?\\d{2,4})|(?:\\d{1,2}(?:\\s)*(?:rd|th|st)?(?:\\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\\s)*?[-/,]?(?:\\s)*\'?\\d{2,4})')]),
      education: new FormControl(0, [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
    this.teacherForm.statusChanges.subscribe(status => {
      this.isFormValid = status === 'VALID';
    });
    this.getAllGender();
    this.getAllEducation();
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

  submit() {
    const teacher = this.teacherForm.value;
    teacher.gender = this.teacherForm.get('gender').value;
    teacher.education = this.teacherForm.get('education').value;
    this.teacherService.saveTeacher(teacher).subscribe(() => {
      alert('Create Successfully!');
      this.router.navigate(['/teacher/list']);
      // this.productForm.reset();
    }, e => console.log(e));
  }
}
