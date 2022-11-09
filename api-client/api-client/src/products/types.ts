import { Pagination } from '../base'
import { Category } from '../categories/types'
import { Label } from '../labels/types'

export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchProductsParams = Pagination & {
    state?: SearchState,
    name?: string,
}

export type NewProduct = {
    name: string,
    description?: string,
    price: number,
    position?: number,
    image?: number,
    is_available?: boolean,
    category_id: number,
}

export type UpdateProduct = {
    name?: string,
    description?: string,
    price?: number,
    position?: number,
    image?: number,
    is_available?: boolean,
    category_id?: number,
}

export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    position: number,
    image: string,
    is_available: boolean,
    category: Category,
    created_by: Date,
    updated_by: Date,
    labels?: Label[]
}