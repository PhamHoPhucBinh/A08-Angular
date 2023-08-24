import {Education} from './education';
import {Gender} from './gender';

export interface Teacher {
  id: number;
  teacherName: string;
  gender: Gender;
  education: Education;
  birthday: string;
  salary: number;
}
