import qs from 'querystringify'
import { NewTable, UpdateTable, response, Table, SearchTablesParams } from './types'
import { Base } from '../base'

const resourceName = 'tables'

export class Tables extends Base {
    getTables(params?: SearchTablesParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<Table[]>(query)
    }

    getTable(id: string) {
        return this.request<Table>(`${resourceName}/${id}`)
    }

    createTable(params: NewTable) {
        return this.request<response<Table>>(resourceName, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }


    updateTable(id: number, params?: UpdateTable) {
        return this.request<response<Table>>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteTable (id: string) {
        return this.request<Table>(`${resourceName}/${id}`, { method: 'DELETE' })
    }

}
