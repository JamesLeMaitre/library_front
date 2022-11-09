import qs from 'querystringify'
import { ChangePasswordRequest, LoginRequest, LoginResponse } from './types'
import { Base, Pagination } from '../base'
 
const resourceName = 'auth'

export class Auth extends Base {
    login (params: LoginRequest) {
        return this.request<LoginResponse>(`${resourceName}/login`, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    adminLogin (params: LoginRequest) {
        return this.request<LoginResponse>(`${resourceName}/admin/login`, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    merchantLogin (params: LoginRequest) {
        return this.request<LoginResponse>(`${resourceName}/merchant/login`, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }

    logout() {
        return this.request<any>(`${resourceName}/logout`, {
            method: 'POST',
        })
    }

    changePassword(params: ChangePasswordRequest) {
        return this.request<any>(`${resourceName}/change-password`, {
            method: 'POST',
            body: JSON.stringify({ ...params }) 
        })
    }
    
}
