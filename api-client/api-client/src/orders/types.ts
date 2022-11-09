import { Pagination } from '../base'
import { Table } from '../tables/types'


export enum SearchState {
    fresh,
    rising,
    all,
}

export type SearchOrdersParams = Pagination & {
    state?: SearchState,
    merchant_id?: number,
    table_id?: number,
    startDate?: string,
    endDate?: string
}

type item = {
    product_id: number,
    quantity: number
}

export type PaymentType = {
    id: number,
    label: string
}

export type Order = {
    note: string,
    merchant_id: number,
    table_id: String,
    table: Table,
    payment_type: PaymentType,
    tips_amount?: number,
    tax_amount?: number,
    total: number,
    subTotal: number,
    order_status?:any,
    id: number
}

export type NewOrder = {
    note: string,
    merchant_id: number,
    language_id?: number,
    table_id: String,
    items: item[]
}

export type OrderPay = {
    merchant_id: number,
    order_id: number,
    tips_amount?: number,
    tax_amount?: number,
    payment_type_id?: number,
    info: string
}

export type UpdateOrder = {
    rate?: number
}

