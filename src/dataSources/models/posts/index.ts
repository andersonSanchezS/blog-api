// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IPostModel } from './types'

// Task log model
import postsLogs from '@logs/posts/index'

// Relations
import UsersModel from '@models/users/index'
import CategoriesModel from '@models/categories/index'

const db = sequelize()

const PostModel = db.define<IPostModel>(
    'posts',
    {
        pIdAuto: {
            type: Sequelize.INTEGER,
            unique: true
        },

        pId: {
            type: Sequelize.STRING(50),
            primaryKey: true
        },

        pTitle: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },

        pDescription: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },

        pContent: {
            type: Sequelize.TEXT,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        userId: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            references: {
                model: UsersModel,
                key: 'uId'
            }
        },
        categoryId: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            references: {
                model: CategoriesModel,
                key: 'cId'
            }
        },
        pState: {
            type: Sequelize.TINYINT,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            defaultValue: 1
        }
    },
    {
        timestamps: true,
        paranoid: true,
        hooks: {
            beforeCreate: (attributes: any, options: any) => {
                const id = !!attributes.pId
                options.rqType = options.updateOnDuplicate
                    ? id
                        ? 'BULKUPDATE'
                        : 'BULKCREATE'
                    : 'CREATE'
                attributes.pId = attributes.pId || nanoid(32)
                return options
            },
            afterUpdate: (attributes: any, options: any) => {
                postsLogs
                    .create({
                        ...attributes?.dataValues,
                        aLog: 2,
                        userId: options.context?.uId,
                        createdAt: undefined,
                        updatedAt: undefined,
                        deletedAt: undefined
                    })
                    .catch(() => undefined)

                // Return registered attributes
                return attributes
            },
            afterCreate: (attributes: any, options: any) => {
                postsLogs
                    .create({
                        ...attributes?.dataValues,
                        aLog: options.rqType === 'BULKUPDATE' ? 2 : 1,
                        userId: options.context?.uId,
                        createdAt: undefined,
                        updatedAt: undefined,
                        deletedAt: undefined
                    })
                    .catch(() => undefined)

                // Return registered attributes
                return attributes
            }
        }
    }
)

UsersModel.hasOne(PostModel, {
    foreignKey: 'userId',
    sourceKey: 'uId'
})

PostModel.belongsTo(UsersModel, {
    foreignKey: 'userId',
    targetKey: 'uId'
})

CategoriesModel.hasOne(PostModel, {
    foreignKey: 'categoryId',
    sourceKey: 'cId'
})

PostModel.belongsTo(CategoriesModel, {
    foreignKey: 'categoryId',
    targetKey: 'cId'
})

export default PostModel
