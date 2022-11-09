import { Pagination } from '../base'
import { StandardEmoji } from '../standard-emojis/types'
import { Merchant } from '../merchants/types'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchLanguagesParams = Pagination & {
    state?: SearchState,
    name?: string,
}

export type NewLanguage = {
    name: string,
    iso_639_1_code: string
    country: string,
}

export type UpdateLanguage = {
    name?: string,
    iso_639_1_code?: string
    country?: string,
} 

export type Language = {
    id: number,
    name: string,
    iso_639_1_code: string
    country: string,
    created_at: Date,
    updated_at: Date
}