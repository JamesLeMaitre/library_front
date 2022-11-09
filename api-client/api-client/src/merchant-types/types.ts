import { Pagination } from '../base'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchMerchantTypesParams = Pagination & {
    state?: SearchState,
    name?: string,
}

export type NewMerchantType = {
    name: string,
}

export type MerchantType = {
    id: number,
    name: string,
    created_at: Date
    updated_at: Date
}