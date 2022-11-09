import qs from 'querystringify'
import { Language, SearchLanguagesParams, NewLanguage, UpdateLanguage } from './types'
import { Base, Pagination } from '../base'
 
const resourceName = 'languages'

export class Languages extends Base {

    getLanguages (params?: SearchLanguagesParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Language[]>(query)
    }
    
    getLanguage (id: number) {
        return this.request<Language>(`${resourceName}/${id}`)
    }

    createLanguage (params: NewLanguage) {
        return this.request<Language>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    updateLanguage (id: number, params?: UpdateLanguage) {
        return this.request<Language>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteLanguage (id: number) {
        return this.request<Language>(`${resourceName}/${id}`, { method: 'DELETE' })
    }

    addMerchantToLanguage (languageId, merchantId) {
        return this.request<Language>(`${resourceName}/${languageId}/merchants/${merchantId}`, {
            method: 'POST',
        })
    }

    removeMerchantFromLanguage (languageId, merchantId) {
        return this.request<Language>(`${resourceName}/${languageId}/merchants/${merchantId}`, {
            method: 'DELETE',
        })
    }

    syncTranslations (languageId, data) {
        return this.request<Language>(`${resourceName}/${languageId}/translations`, {
            body: JSON.stringify({ ...data }),
            method: 'POST',
        })
    }
    
}
