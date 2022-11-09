import qs from 'querystringify'
import { User, SearchUsersParams, NewUser, UpdateUser } from './types'
import { Base, Pagination } from '../base'

const resourceName = 'users'

export class Users extends Base {

    getUsers (params?: SearchUsersParams) {
        let query = `${resourceName}`
        if (params) {
            query += qs.stringify(params, '?')
        }
        return this.request<User[]>(query)
    }
    
    getUser (id: number) {
        return this.request<User>(`${resourceName}/${id}`)
    }

    createUser (params: NewUser) {
        return this.request<User>(resourceName, {
            method: 'POST',
            //body: params as any//JSON.stringify({ ...params })
            body: JSON.stringify({ ...params })
        })
    }

    updateUser (id: number, params?: UpdateUser) {
        return this.request<User>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...params })
        })
    }

    deleteUser (id: number) {
        return this.request<User>(`${resourceName}/${id}`, { method: 'DELETE' })
    }
    
}
