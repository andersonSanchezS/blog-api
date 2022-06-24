// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IUserRolesModel } from './types'

// Task log model
import userRolesLog from '@logs/userRoles/index'
const db = sequelize()

const UserRolesModel = db.define<IUserRolesModel>('task', {
    urIdAuto: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true
    },

    urId: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },

    urDescription: {
        type: Sequelize.STRING(255),
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    urCode: {
        type: Sequelize.STRING(255),
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    urState: {
        type: Sequelize.TINYINT,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: 1
    }

}, {
    timestamps: true,
    paranoid: true,
    hooks: {
        beforeCreate: (attributes: any, options: any) => {
            const id = !!attributes.urId
            options.rqType = options.updateOnDuplicate ? id ? 'BULKUPDATE' : 'BULKCREATE' : 'CREATE'
            attributes.urId = attributes.urId || nanoid(32)
            return options
        },
        afterUpdate: (attributes: any, options: any) => {
            userRolesLog.create({
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
            userRolesLog.create({
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
})

export default UserRolesModel