import { Model } from 'sequelize'

export interface IUserRoles{
    urIdAuto?:number,
    urId?:string,
    urDescription:string,
    urCode:string,
    urState:number,
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IUserRolesModel extends Model<IUserRoles>, IUserRoles {}