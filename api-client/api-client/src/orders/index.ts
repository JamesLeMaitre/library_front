import qs from 'querystringify'
import { NewOrder, UpdateOrder, OrderPay, Order, SearchOrdersParams } from './types'
import { Base, Response } from '../base'

const resourceName = 'orders'

export class Orders extends Base {
    getOrders(params?: SearchOrdersParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Order[]>(query)
    }

    getOrder(id: string) {
        return this.request<Order>(`${resourceName}/${id}`)
    }

    createOrder(params: NewOrder) {
        return this.request<Response<Order>>(`app/${resourceName}`, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    payOrder(params: OrderPay) {
        return this.request<Response<Order>>(`app/${resourceName}/pay`, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    updateOrder(id: number, params?: UpdateOrder) {
        return this.request<Response<Order>>(`app/${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    /*deleteOrder (id: string) {
        return this.request<Order>(`${resourceName}/${id}`, { method: 'DELETE' })
    }*/

}
