import { Model } from 'sequelize'

export interface ICategoriesLog {
    cIdAuto?: number
    cId?: string
    cDescription: string
    cCode: string
    cState: number
    aLog: number
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface ICategoriesLogsModel
    extends Model<ICategoriesLog>,
        ICategoriesLog {}
