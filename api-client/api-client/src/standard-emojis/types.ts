import { Pagination } from '../base'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchStandardEmojisParams = Pagination & {
    state?: SearchState,
    value?: string,
    title?: string,
}

export type NewStandardEmoji = {
    value: string,
    title?: string,
}

export type UpdateStandardEmoji = {
    value?: string,
    title?: string,
}

export type StandardEmoji = {
    id: number,
    value: string,
    title: string,
    created_at: Date,
    updated_at: Date,
}