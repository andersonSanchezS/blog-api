import { Model } from 'sequelize'

export interface IRolePermissions {
    rpIdAuto?: number
    rpId?: string
    roleId: string
    rpPermission: string
    rpState: number
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IRolePermissionModel extends Model<IRolePermissions>, IRolePermissions {}
