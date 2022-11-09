import { Pagination } from '../base'


export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchTablesParams = Pagination & {
    state?: SearchState,
    merchant_id?: number
}


export type Table = {
    merchant_id: number,
    id: number
}

export type NewTable = {
    merchant_id: number,
    qr_codes?: string,
    url_link?: string,
    description?: string
}

export type UpdateTable = {
    qr_codes?: string,
    url_link?: string,
    description?: string
}

export type response<T> = {
    status: boolean
    data: T
}
