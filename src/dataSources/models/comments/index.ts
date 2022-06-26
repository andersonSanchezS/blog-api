// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { ICommentsModel } from './types'

// Task log model
import commentsLogs from '@logs/comments/index'

// Relations
import UsersModel from '@models/users/index'
import PostModel from '@models/posts/index'

const db = sequelize()

const CommentModel = db.define<ICommentsModel>(
    'comments',
    {
        cIdAuto: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true
        },

        cId: {
            type: Sequelize.STRING(50),
            primaryKey: true
        },

        cContent: {
            type: Sequelize.TEXT,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },

        cState: {
            type: Sequelize.TINYINT,
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
        postId: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            references: {
                model: PostModel,
                key: 'pId'
            }
        }
    },
    {
        timestamps: true,
        paranoid: true,
        hooks: {
            beforeCreate: (attributes: any, options: any) => {
                const id = !!attributes.cId
                options.rqType = options.updateOnDuplicate
                    ? id
                        ? 'BULKUPDATE'
                        : 'BULKCREATE'
                    : 'CREATE'
                attributes.pId = attributes.cId || nanoid(32)
                return options
            },
            afterUpdate: (attributes: any, options: any) => {
                commentsLogs
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
                commentsLogs
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

export default PostModel
