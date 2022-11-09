import { Pagination } from '../base'

export enum SearchState {
    fresh,
    rising,
    all,
}

export enum LabelType {
    preference = 'preference',
    allergen = 'allergen',
}

export type SearchLabelsParams = Pagination & {
    state?: SearchState,
    name?: string,
    type?: LabelType,
}

export type NewLabel = {
    name: string,
    type: LabelType,
}

export type UpdateLabel = {
    name?: string,
    type?: LabelType,
}


export type Label = {
    id: number,
    name: string,
    type: LabelType,
    created_at: Date,
    updated_at: Date,
}