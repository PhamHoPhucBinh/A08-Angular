import {Component, OnInit} from '@angular/core';
import {Gender} from '../../model/gender';
import {Education} from '../../model/education';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TeacherService} from '../../service/teacher.service';
import {GenderService} from '../../service/gender.service';
import {EducationService} from '../../service/education.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
  genders: Gender[];
  p = 1;
  id: number;
  educations: Education[];
  teacherForm: FormGroup;
  isFormValid = false;

  constructor(private teacherService: TeacherService,
              private genderService: GenderService,
              private educationService: EducationService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTeacher(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllGender();
    this.getAllEducation();
  }

  private getTeacher(id: number) {
    return this.teacherService.findById(id).subscribe(teacher => {
      // @ts-ignore
      this.teacherForm = new FormGroup({
        teacherName: new FormControl(teacher.teacherName, [Validators.pattern('^([A-Z][a-z]+)( [A-Z][a-z]+)+$')]),
        gender: new FormControl(teacher.gender, [Validators.required]),
        education: new FormControl(teacher.education, [Validators.required]),
        // tslint:disable-next-line:max-line-length
        birthday: new FormControl(teacher.birthday,  [Validators.required, Validators.pattern('(?:\\d{1,2}[-/\\s]\\d{1,2}[-/\\s]\'?\\d{2,4})|(?:\\d{2,4}[-/\\s]\\d{1,2}[-/\\s]\\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\\s-/,]*?\\d{1,2}(?:\\s)*(?:rd|th|st)?(?:\\s)*[-/,]?(?:\\s)*\'?\\d{2,4})|(?:\\d{1,2}(?:\\s)*(?:rd|th|st)?(?:\\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\\s)*?[-/,]?(?:\\s)*\'?\\d{2,4})')]),
        salary: new FormControl(teacher.salary, [Validators.required])
      });
      this.teacherForm.statusChanges.subscribe(status => {
        this.isFormValid = status === 'VALID';
      });
    });
  }

  private getAllGender() {
    this.genderService.getAllGender().subscribe((data => {
      this.genders = data;
    }));
  }

  private getAllEducation() {
    this.educationService.getAllEducation().subscribe((data => {
      this.educations = data;
    }));
  }

  editTeacher(id: number) {
    const teacher = this.teacherForm.value;
    teacher.gender = this.teacherForm.get('gender').value;
    teacher.education = this.teacherForm.get('education').value;
    this.teacherService.editTeacher(id, teacher).subscribe(() => {
      alert('update successfully');
      this.router.navigate(['/teacher/list']);
    });

  }
}
