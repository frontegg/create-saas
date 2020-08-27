export type inputTypes = 'text' | 'password' | 'email' | 'tel' | 'file';


export interface IField {
    label: string,
    name: string,
    placeholder?: string,
    initialState?: string,
    type: "text" | "password" | "email" | "checkbox" | "select" | "radio"
    options?: {
        label: string,
        value: any
    }[]
}