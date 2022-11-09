import qs from 'querystringify'
import { Label, SearchLabelsParams, NewLabel, UpdateLabel } from './types'
import { Base, Pagination } from '../base'

const resourceName = 'labels'

export class Labels extends Base {
    
    getLabels (params?: SearchLabelsParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Label[]>(query)
    }
    
    getLabel (id: number) {
        return this.request<Label>(`${resourceName}/${id}`)
    }

    createLabel (params: NewLabel) {
        return this.request<Label>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    updateLabel (id: number, params?: UpdateLabel) {
        return this.request<Label>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteLabel (id: number) {
        return this.request<Label>(`${resourceName}/${id}`, { method: 'DELETE' })
    }
 
}
