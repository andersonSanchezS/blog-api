/* eslint-disable @typescript-eslint/no-explicit-any */

// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Users interface

import { IUserModel } from './types'

// Users logs model
import UsersLogsModel from '@logs/userRoles/index'

// Import required models for relations
import UserRolesModel from '@models/userRoles/index'

const db = sequelize()

const UsersModel = db.define<IUserModel>(
    'users',
    {
        uIdAuto: {
            type: Sequelize.INTEGER,
            unique: true
        },

        uId: {
            type: Sequelize.STRING(50),
            primaryKey: true
        },

        uName: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        uLastName: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        uEmail: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        uPassword: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        roleId: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            references: {
                model: UserRolesModel,
                key: 'urId'
            }
        },
        uState: {
            type: Sequelize.TINYINT,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            defaultValue: 1
        },
        uEdited: {
            type: Sequelize.TINYINT,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            defaultValue: 1
        },
        uGoogleAuth: {
            type: Sequelize.TINYINT,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            defaultValue: 0
        }
    },
    {
        timestamps: true,
        paranoid: true,
        hooks: {
            beforeCreate: (attributes: any, options: any) => {
                const id = !!attributes.uId
                options.rqType = options.updateOnDuplicate
                    ? id
                        ? 'BULKUPDATE'
                        : 'BULKCREATE'
                    : 'CREATE'
                attributes.uId = attributes.uId || nanoid(32)
                return options
            },
            afterUpdate: (attributes: any, options: any) => {
                UsersLogsModel.create({
                    ...attributes?.dataValues,
                    aLog: 2,
                    userId: options.context?.uId,
                    createdAt: undefined,
                    updatedAt: undefined,
                    deletedAt: undefined
                }).catch(() => undefined)

                // Return registered attributes
                return attributes
            },
            afterCreate: (attributes: any, options: any) => {
                UsersLogsModel.create({
                    ...attributes?.dataValues,
                    aLog: options.rqType === 'BULKUPDATE' ? 2 : 1,
                    userId: options.context?.uId,
                    createdAt: undefined,
                    updatedAt: undefined,
                    deletedAt: undefined
                }).catch(() => undefined)

                // Return registered attributes
                return attributes
            }
        }
    }
)

UserRolesModel.hasOne(UsersModel, {
    foreignKey: 'roleId',
    sourceKey: 'urId'
})

UsersModel.belongsTo(UserRolesModel, {
    foreignKey: 'roleId',
    targetKey: 'urId'
})

export default UsersModel
