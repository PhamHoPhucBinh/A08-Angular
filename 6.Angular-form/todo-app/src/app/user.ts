export interface User {
  id: string;
  password: string;
  email: string;
  age?: number;
  gender?: boolean;
  phone?: string;
  country: string;
}
