import { Pagination } from '../base'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchMerchantSettingsParams = Pagination & {
    state?: SearchState,
    name?: string,
}

export type NewMerchantSetting = {
    merchant_id: string,
    value: any
}

export type MerchantSetting = {
    id: number,
    value: any,
    merchant_id: number,
    created_at: Date
    updated_at: Date
}