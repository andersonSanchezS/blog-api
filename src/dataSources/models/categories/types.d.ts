import { Model } from 'sequelize'

export interface ICategories {
    cIdAuto?: number
    cId?: string
    cDescription: string
    cCode: string
    cState: number
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface ICategoriesModel extends Model<ICategories>, ICategories {}
