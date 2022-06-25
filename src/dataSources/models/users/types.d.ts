import { Model } from 'sequelize'

export interface IUser {
    uIdAuto?: number
    uId?: string
    uName: string
    uLastName: string
    uEmail: string
    uPassword: string
    uRoleId: string
    uState: number
    uGoogleAuth: number
    uEdited: number
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IUserModel extends Model<IUser>, IUser {}
