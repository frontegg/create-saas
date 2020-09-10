export interface ICredits {
    href: string
    name: string
    desc: string
}

export interface ICreditsComponent {
    credits: ICredits[]
}

export interface ICodeStructureComponent {
    importantFolders: ICodeStructure[]
    importantFiles: ICodeStructure[]
}

export interface ICodeStructure {
    path: string
    desc: string
}

export interface IChangeLogComponent {
    date: string
    status: string
    update: string[]
}
