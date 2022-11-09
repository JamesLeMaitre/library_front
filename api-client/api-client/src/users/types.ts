import { Pagination } from '../base'
import { StandardEmoji } from '../standard-emojis/types'
import { Merchant } from '../merchants/types'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchUsersParams = Pagination & {
    state?: SearchState,
    email?: string,
}

export type UpdateUser = {
    email?: string,
    password?: string,
    is_admin?: boolean,
    verified_at?: Date,
    activated_at?: Date,
    deactivated_at?: Date
}

export type NewUser = {
    email: string,
    password: string,
    is_admin?: boolean,
    verified_at?: Date,
    activated_at?: Date
}


export type User = {
    id: number,
    email: string,
    is_admin: boolean,
    standard_emoji: StandardEmoji | null,
    merchant: Merchant | null,
    created_at: Date,
    updated_at: Date,
    verified_at: Date,
    activated_at: Date,
    deactivated_at: Date
}