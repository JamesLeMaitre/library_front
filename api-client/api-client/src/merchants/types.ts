import { Pagination } from '../base'
import { MerchantType } from '../merchant-types/types'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchMerchantsParams = Pagination & {
    state?: SearchState,
    name?: string,
    description?: string,
}

export type NewMerchant = {
    url_id?: string,
    name: string,
    description: string,
    address?: string,
    country?: string,
    zip?: string,
    logo_image?: string,
    banner_image?: string,
    administrated_by_user_id?: number,
    merchant_type_id?: MerchantType,
    menu_available?: boolean,
}

export type UpdateMerchant = {
    url_id?: string,
    name?: string,
    description?: string,
    address?: string,
    country?: string,
    zip?: string,
    logo_image?: string,
    banner_image?: string,
    administrated_by_user_id?: number,
    merchant_type_id?: MerchantType,
    menu_available?: boolean,
}

export type Merchant = {
    id: number,
    url_id: string,
    name: string,
    description: string,
    address: string,
    country: string,
    city: string,
    phone_number: string,
    zip: string,
    logo_image: string,
    banner_image: string,
    menu_available: string,
    administrated_by_user_id: number,
    merchant_type: MerchantType,
    created_by: Date,
    updated_by: Date,
}