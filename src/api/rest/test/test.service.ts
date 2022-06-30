import { Request, Response } from 'express'
// Models
import categoriesModel from '@models/categories/index'
import UserRolesModel from '@db/models/userRoles'
import RolePermissionsModel from '@db/models/rolePermissions'
import usersModel from '@models/users/index'
import PostModel from '@db/models/posts'
import CommentModel from '@db/models/comments'

export const testRoute = async (req: Request, res: Response) => {
    const query = await categoriesModel.create({
        cId: '1213213',
        cIdAuto: 1,
        cCode: 'test',
        cDescription: '2132132',
        cState: 1
    })
    const xd = UserRolesModel.create({
        urCode: 'sadsad',
        urDescription: 'sadsad',
        urState: 1
    })
    RolePermissionsModel.findAll()
    usersModel.findAll()
    PostModel.findAll()
    CommentModel.findAll()
    res.status(200).json('query')
}
