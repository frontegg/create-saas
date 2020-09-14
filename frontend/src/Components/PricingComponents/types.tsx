
export interface ICardSmallLarge {
    data: ICardSLData[]
}

export interface ICardSLData {
    name: string,
    descs: { label: string, approve: boolean }[]
    price: number
}

export interface ICardRow {
    data: ICardRowData
}

export interface ICardRowData {
    descs: TDesc[]
    cards: TCard[]
}

export type TDesc = { label: string, approve: boolean }

export type TCard = { name: string, price: number }