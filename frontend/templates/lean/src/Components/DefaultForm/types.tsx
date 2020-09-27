export type inputTypes = 'text' | 'password' | 'email' | 'tel' | 'file';

export interface IField {
  label: string;
  signature: string;
  name: string;
  placeholder?: string;
  initialState?: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'select' | 'radio';
  options?: {
    label: string;
    value: any;
  }[];
  validType?: 'invalid' | 'valid' | undefined;
  values?: string[];
}
