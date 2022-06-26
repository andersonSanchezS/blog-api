// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IRolePermissionModel } from './types'

// Task log model
import rolePermissionsLogs from '@logs/rolePermissions/index'

// Import required models for relations
import UserRolesModel from '@models/userRoles/index'

const db = sequelize()

const RolePermissionsModel = db.define<IRolePermissionModel>(
    'rolePermissions',
    {
        rpIdAuto: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true
        },

        rpId: {
            type: Sequelize.STRING(50),
            primaryKey: true
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

        rpPermission: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },

        rpState: {
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
                const id = !!attributes.rpId
                options.rqType = options.updateOnDuplicate
                    ? id
                        ? 'BULKUPDATE'
                        : 'BULKCREATE'
                    : 'CREATE'
                attributes.rpId = attributes.rpId || nanoid(32)
                return options
            },
            afterUpdate: (attributes: any, options: any) => {
                rolePermissionsLogs
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
                rolePermissionsLogs
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

export default RolePermissionsModel
