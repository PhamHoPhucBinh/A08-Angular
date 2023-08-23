import {Gender} from "./gender";

export interface Student {
  id: number;
  studentName: string;
  studentGender: Gender;
  phone: string;
  email: string;
  address: string;

}
