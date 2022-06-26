import { Model } from 'sequelize'

export interface IComments {
    cIdAuto?: number
    cId?: string
    cContent: string
    cState: number
    userId: string
    postId: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface ICommentsModel extends Model<IComments>, IComments {}
