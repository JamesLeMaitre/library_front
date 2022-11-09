import qs from 'querystringify'
import { NewMerchantSetting, MerchantSetting, SearchMerchantSettingsParams } from './types'
import { Base, Pagination } from '../base'

const resourceName = 'merchant-settings'

export class MerchantSettings extends Base {
    getMerchantSettings(params?: SearchMerchantSettingsParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<MerchantSetting[]>(query)
    }

    getMerchantSetting(id: number) {
        return this.request<MerchantSetting>(`${resourceName}/${id}`)
    }

    createMerchantSetting(params: NewMerchantSetting) {
        return this.request<MerchantSetting>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    updateMerchantSetting(id: number, params?: NewMerchantSetting) {
        return this.request<MerchantSetting>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteMerchantSetting(id: number) {
        return this.request<MerchantSetting>(`${resourceName}/${id}`, { method: 'DELETE' })
    }

}
