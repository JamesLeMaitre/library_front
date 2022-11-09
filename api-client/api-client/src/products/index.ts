import qs from 'querystringify'
import { Product, SearchProductsParams, NewProduct, UpdateProduct } from './types'
import { Base, Pagination } from '../base'

const resourceName = 'products'

export class Products extends Base {
    getProducts (params?: SearchProductsParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Product[]>(query)
    }
    
    getProduct (id: string) {
        return this.request<Product>(`${resourceName}/${id}`)
    }

    createProduct (params: FormData) {
        return this.request<Product>(resourceName, {
            method: 'POST',
            body: params
        })
    }

    updateProduct (id: string, params?: FormData) {
        return this.request<Product>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: params
        })
    }

    deleteProduct (id: string) {
        return this.request<Product>(`${resourceName}/${id}`, { method: 'DELETE' })
    }
 
}
