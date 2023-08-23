import {Education} from "./education";

export interface Teacher {
  id: number,
  teacherName: string;
  education: Education;
  phone: string;
  email: string;
  salary: number;
}
