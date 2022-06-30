// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { ICommentLogsModel } from './types'

const db = sequelize()

const CommentLogsModel = db.define<ICommentLogsModel>(
    'commentsLogs',
    {
        cId: {
            type: Sequelize.STRING(255),
            primaryKey: true
        },
        cIdAuto: {
            type: Sequelize.INTEGER
        },
        postId: Sequelize.STRING(255),
        userId: Sequelize.STRING(255),
        cContent: Sequelize.TEXT,
        cState: Sequelize.TINYINT,
        aLog: Sequelize.TINYINT
    },
    {
        timestamps: true,
        paranoid: true
    }
)

export default CommentLogsModel
