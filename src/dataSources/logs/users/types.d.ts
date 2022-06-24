import { Model } from 'sequelize'

export interface IUsersLog{
    uIdAuto?:number,
    uId?:string,
    uName:string,
    uLastName:string,
    uEmail:string,
    uPassword:string,
    uState:number,
    uGoogleAuth:number,
    uEdited:number,
    aLog: number,
    userId: string,
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

// Interface Model
export interface IUsersModel extends Model<IUsersLog>, IUsersLog {}