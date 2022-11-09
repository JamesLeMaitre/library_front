import qs from 'querystringify'
import { Merchant, SearchMerchantsParams, NewMerchant, UpdateMerchant } from './types'
import { Base, Pagination, Response } from '../base'
import { Category } from '../categories/types'
import { Product } from '../products/types'
import { MerchantSetting } from '../merchant-settings/types'
import { Language } from '../languages/types'

const resourceName = 'merchants'

export class Merchants extends Base {

    getMerchants(params?: SearchMerchantsParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Merchant[]>(query)
    }

    getMerchant(url_id: string, languageCode: string | undefined = undefined) {
        if (languageCode) {
            return this.request<Merchant>(`${resourceName}/${url_id}?lang=${languageCode}`)
        }
        return this.request<Merchant>(`${resourceName}/${url_id}`)
    }

    getMerchantCategories(url_id: string, language: string | undefined | null = undefined) {
        if (language) {
            return this.request<Category[]>(`${resourceName}/${url_id}/categories?lang=${language}`)
        }
        return this.request<Category[]>(`${resourceName}/${url_id}/categories`)
    }

    getMerchantProducts(url_id: string) {
        return this.request<Product[]>(`${resourceName}/${url_id}/products`)
    }

    getMerchantSettingsByMerchant(url_id: string) {
        return this.request<MerchantSetting>(`${resourceName}/${url_id}/settings`)
    }

    getMerchantLanguages(url_id: string) {
        return this.request<Language[]>(`${resourceName}/${url_id}/languages`)
    }

    createMerchant(params: FormData) {
        return this.request<Merchant>(resourceName, {
            method: 'POST',
            body: params
            // body: JSON.stringify({ ...params })
        })
    }

    updateMerchant(id: number, params?: FormData) {
        return this.request<Merchant>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: params
            // body: JSON.stringify({ ...params })
        })
    }

    updateMerchantAttributes(id: number, params?: FormData) {
        return this.request<Response<Merchant>>(`${resourceName}/attributes/${id}`, {
            method: 'PUT',
            body: params
            // body: JSON.stringify({ ...params })
        })
    }

    deleteMerchant(id: number) {
        return this.request<Merchant>(`${resourceName}/${id}`, { method: 'DELETE' })
    }

}
