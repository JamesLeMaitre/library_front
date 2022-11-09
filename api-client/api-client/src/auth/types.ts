import { Pagination } from '../base'
import { StandardEmoji } from '../standard-emojis/types'
import { Merchant } from '../merchants/types'
import { User } from '../users/types'

export type LoginRequest = {
    email: string,
    password: string,
    remember?: boolean
}

export type AuthTokenType = {
    type: string,
    token: string
}

export type LoginResponse = {
    user: User,
    token: AuthTokenType,
}

export type ChangePasswordRequest = {
    current_password: string,
    new_password: string,
    user_id: number
}
