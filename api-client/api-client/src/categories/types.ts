import { Pagination } from '../base'
import { StandardEmoji } from '../standard-emojis/types'
import { Merchant } from '../merchants/types'
import { Product } from '../products/types'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchCategoriesParams = Pagination & {
    state?: SearchState,
    name?: string,
}

export type NewCategory = {
    name: string,
    description?: string,
    position?: number,
    is_available?: boolean,
    standard_emoji_id?: number,
    merchant_id?: number,
}

export type UpdateCategory = {
    name?: string,
    description?: string,
    position?: number,
    is_available?: boolean,
    standard_emoji_id?: number,
    merchant_id?: number,
} 

export type Category = {
    id: number,
    name: string,
    description: string,
    position: number,
    is_available: boolean,
    standard_emoji: StandardEmoji | null,
    merchant: Merchant | null,
    created_at: Date,
    updated_at: Date,
    products?: Product[]
}

export type UpdateCategoriesPositions = {
    positions: number[]
}

export type UpdateProductsPositions = {
   positions: number[] 
}