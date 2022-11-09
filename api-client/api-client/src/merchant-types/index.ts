import qs from 'querystringify'
import { MerchantType, SearchMerchantTypesParams, NewMerchantType } from './types'
import { Base, Pagination } from '../base'

const resourceName = 'merchant-types'

export class MerchantTypes extends Base {
    getMerchantTypes (params?: SearchMerchantTypesParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<MerchantType[]>(query)
    }
    
    getMerchantType (id: number) {
        return this.request<MerchantType>(`${resourceName}/${id}`)
    }

    createMerchantType (params: NewMerchantType) {
        return this.request<MerchantType>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    updateMerchantType (id: number, params?: NewMerchantType) {
        return this.request<MerchantType>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteMerchantType (id: number) {
        return this.request<MerchantType>(`${resourceName}/${id}`, { method: 'DELETE' })
    }
    
}
