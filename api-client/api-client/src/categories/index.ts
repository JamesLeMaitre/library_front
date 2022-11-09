import qs from 'querystringify'
import { Category, SearchCategoriesParams, NewCategory, UpdateCategory, UpdateCategoriesPositions, UpdateProductsPositions } from './types'
import { Base, Pagination } from '../base'
 
const resourceName = 'categories'

export class Categories extends Base {

    getCategories (params?: SearchCategoriesParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Category[]>(query)
    }
    
    getCategory (id: number) {
        return this.request<Category>(`${resourceName}/${id}`)
    }

    createCategory (params: NewCategory) {
        return this.request<Category>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    updateCategory (id: number, params?: UpdateCategory) {
        return this.request<Category>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteCategory (id: number) {
        return this.request<Category>(`${resourceName}/${id}`, { method: 'DELETE' })
    }

    updateCategoriesPositions (params: UpdateCategoriesPositions) {
        return this.request<any>(`${resourceName}/positions`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        }) 
    }

    updateProductsPositions (category_id: number, params: UpdateProductsPositions) {
        return this.request<any>(`${resourceName}/${category_id}/products/positions`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        }) 
    }
    
}
