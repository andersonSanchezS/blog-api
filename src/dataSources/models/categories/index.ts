// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { ICategoriesModel } from './types'

// Task log model
import categoriesLogs from '@logs/categories/index'

const db = sequelize()

const CategoriesModel = db.define<ICategoriesModel>(
    'categories',
    {
        cIdAuto: {
            type: Sequelize.INTEGER,
            unique: true
        },

        cId: {
            type: Sequelize.STRING(50),
            primaryKey: true
        },

        cDescription: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        cCode: {
            type: Sequelize.STRING(255),
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        cState: {
            type: Sequelize.TINYINT,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
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
                categoriesLogs
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
                categoriesLogs
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

export default CategoriesModel
