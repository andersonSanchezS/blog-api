import { Model } from 'sequelize'

export interface ICommentsLog {
    cIdAuto?: number
    cId?: string
    postId: string
    userId: string
    cContent: string
    cState: number
    aLog: number
    userId: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface ICommentLogsModel extends Model<ICommentsLog>, ICommentsLog {}
