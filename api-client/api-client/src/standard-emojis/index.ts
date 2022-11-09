import qs from 'querystringify'
import { StandardEmoji, SearchStandardEmojisParams, NewStandardEmoji, UpdateStandardEmoji } from './types'
import { Base, Pagination } from '../base'

const resourceName = 'standard-emojis'

export class StandardEmojis extends Base {
    getStandardEmojis (params?: SearchStandardEmojisParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<StandardEmoji[]>(query)
    }
    
    getStandardEmoji (id: number) {
        return this.request<StandardEmoji>(`${resourceName}/${id}`)
    }

    createStandardEmoji (params: NewStandardEmoji) {
        return this.request<StandardEmoji>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    updateStandardEmoji (id: number, params?: UpdateStandardEmoji) {
        return this.request<StandardEmoji>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteStandardEmoji (id: number) {
        return this.request<StandardEmoji>(`${resourceName}/${id}`, { method: 'DELETE' })
    }
}
