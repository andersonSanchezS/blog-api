// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { ICategoriesLogsModel } from './types'

const db = sequelize()

const CategoryLogsModel = db.define<ICategoriesLogsModel>(
    'categoriesLogs',
    {
        cId: {
            type: Sequelize.STRING(255),
            primaryKey: true
        },
        cIdAuto: {
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        cDescription: Sequelize.STRING(255),
        cCode: Sequelize.STRING(255),
        cState: Sequelize.TINYINT,
        aLog: Sequelize.TINYINT
    },
    {
        timestamps: true,
        paranoid: true
    }
)

export default CategoryLogsModel
