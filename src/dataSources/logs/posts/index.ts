// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IPostLogsModel } from './types'

const db = sequelize()

const PostLogsModel = db.define<IPostLogsModel>(
    'postsLogs',
    {
        pId: {
            type: Sequelize.STRING(255),
            primaryKey: true
        },
        pIdAuto: {
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        pTitle: Sequelize.STRING(255),
        pDescription: Sequelize.STRING(255),
        pContent: Sequelize.TEXT,
        categoryId: Sequelize.STRING(255),
        pState: Sequelize.TINYINT,
        aLog: Sequelize.TINYINT,
        userId: Sequelize.STRING(255)
    },
    {
        timestamps: true,
        paranoid: true
    }
)

export default PostLogsModel
