import { FeedbackRequest, RequestType } from './types'
import { Base } from '../base'
import { Merchant } from '../merchants/types'
import { Label } from '../labels/types'

const resourceName = 'app'

export class App extends Base {

    /* getAppLabels () {
         return this.request<Label[]>(`${resourceName}/labels`, {
             method: 'GET',
         })
     }*/

    getAppMerchantsLabels(url_id: string) {
        return this.request<Label[]>(`${resourceName}/labels/${url_id}`, {
            method: 'GET',
        })
    }

    getAppMerchant(url_id: string, table_id: string) {
        return this.request<Merchant>(`${resourceName}/merchants/${url_id}?table=${table_id}`, {
            method: 'GET',
        })
    }

    sendFeedback(params: FeedbackRequest) {
        return this.request(`${resourceName}/feedbacks`, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }
    sendRequest(params: RequestType) {
        return this.request(`${resourceName}/requests`, {
            method: 'POST',
            body: JSON.stringify({ ...params })
        })
    }
}