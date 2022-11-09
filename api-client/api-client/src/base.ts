import fetch from 'isomorphic-unfetch'

type Config = {
    apiKey?: string,
    basePath?: string,
    authToken?: string,
    logoutCb?: Function,
    language?: string,
}

export type Pagination = {
    page?: number,
    per_page?: number,
}

export type Response<T> = {
    status: boolean
    data: T
}

export abstract class Base {
    private apiKey?: string
    private basePath?: string
    private authToken?: string
    private logoutCb?: Function
    private language?: string

    constructor(config: Config = {}) {
        this.configure(config)
    }

    public configure(config: Config = {}) {
        this.apiKey = config.apiKey || ''
        this.basePath = config.basePath || 'https://apis.menus.neat-in.com/'
        this.authToken = config.authToken || ''
        this.logoutCb = config.logoutCb || null
        this.language = config.language || null
    }

    protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = this.basePath + endpoint
        const headers = {
            'api-key': this.apiKey,
            'Content-type': 'application/json',
            'Authorization': this.authToken,
            'Accept-Language': this.language,
        }

        if (options?.body != null && options.body instanceof FormData) {
            delete headers['Content-type']
        }

        const config = {
            headers,
            ...options,
        }

        return fetch(url, config).then((r) => {
            if (r.ok) {
                return r.text()
            }

            if (r.status == 401 && this.logoutCb != null) {
                this.logoutCb()
                return
            }
            throw new Error(r.statusText)
        }).then((r) => {
            if (r.length > 0) {
                return JSON.parse(r)
            }
            return null
        })
    }
}