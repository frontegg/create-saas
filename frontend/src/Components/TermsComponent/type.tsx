export interface ITermsData {
    title: string
    desc: IDescTerms[]
}

export interface IDescTerms {
    content: string
    subContent?: string[]
}