import { Model } from 'sequelize'

export interface IUserRolesLog {
    urIdAuto?: number
    urId?: string
    urDescription: string
    urCode: string
    urState: number
    aLog: number
    userId: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IUserRolesLogsModel
    extends Model<IUserRolesLog>,
        IUserRolesLog {}
