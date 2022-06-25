import { Model } from 'sequelize'

export interface IPost {
    pIdAuto?: number
    pId?: string
    pTitle: string
    pDescription: string
    pContent: string
    pState: number
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IPostModel extends Model<IPost>, IPost {}
