import { Labels } from './labels'
import { StandardEmojis } from './standard-emojis'
import { MerchantTypes } from './merchant-types'
import { Categories } from './categories'
import { Products } from './products'
import { Users } from './users'
import { Merchants } from './merchants'
import { Auth } from './auth'
import { App } from './app'
import { MerchantSettings } from './merchant-settings'
import { Languages } from './languages'

import { applyMixins } from './utils'
import { Base } from './base'
import { Orders } from './orders'
import { Tables } from './tables'

class NeatinAPIClient extends Base { }
interface NeatinAPIClient extends
    Labels,
    StandardEmojis,
    MerchantTypes,
    Categories,
    Products,
    Users,
    Merchants,
    Auth,
    App,
    MerchantSettings,
    Orders,
    Tables,
    Languages { }

applyMixins(NeatinAPIClient, [
    Labels,
    StandardEmojis,
    MerchantTypes,
    Categories,
    Products,
    Users,
    Merchants,
    Auth,
    App,
    MerchantSettings,
    Orders,
    Tables,
    Languages,
])

export default NeatinAPIClient