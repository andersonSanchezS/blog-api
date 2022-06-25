import { Model } from 'sequelize'

export interface IRolePermissionsLog {
    rpIdAuto?: number
    rpId?: string
    roleId: string
    rpPermission: string
    rpState: number
    aLog: number
    userId: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IRolePermissionsLogsModel
    extends Model<IRolePermissionsLog>,
        IRolePermissionsLog {}
