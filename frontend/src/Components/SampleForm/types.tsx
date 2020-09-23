export interface IField {
  label: string;
  name: string;
  placeholder?: string;
  initialState?: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'select' | 'radio' | 'textarea' | 'number';
  options?: {
    label: string;
    value: any;
  }[];
  cases?: string[];
  signature?: string;
  validation?: string | boolean;
}

export interface SampleFormProps {
  header: string;
  description: string;
  inputs: IField[];
  customErrors?: any;
  alerts?: boolean;
}
