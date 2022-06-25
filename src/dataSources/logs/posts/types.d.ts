import { Model } from 'sequelize'

export interface IPostsLog {
    pIdAuto?: number
    pId?: string
    pTitle: string
    pDescription: string
    pContent: string
    categoryId: string
    pState: number
    aLog: number
    userId: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IPostLogsModel extends Model<IPostsLog>, IPostsLog {}
