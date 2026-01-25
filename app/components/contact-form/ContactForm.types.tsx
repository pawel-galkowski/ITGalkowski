export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};