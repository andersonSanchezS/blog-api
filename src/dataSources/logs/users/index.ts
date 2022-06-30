// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IUsersModel } from './types'

const db = sequelize()

const UserRolesLogsModel = db.define<IUsersModel>(
    'usersLogs',
    {
        uId: {
            type: Sequelize.STRING(255),
            primaryKey: true
        },
        uIdAuto: {
            type: Sequelize.INTEGER
        },
        uName: Sequelize.STRING(255),
        uLastName: Sequelize.STRING(255),
        uEmail: Sequelize.STRING(255),
        uPassword: Sequelize.STRING(255),
        uState: Sequelize.TINYINT,
        uGoogleAuth: Sequelize.TINYINT,
        uEdited: Sequelize.TINYINT,
        roleId: Sequelize.STRING(255),
        aLog: Sequelize.TINYINT,
        userId: Sequelize.STRING(255)
    },
    {
        timestamps: true,
        paranoid: true
    }
)

export default UserRolesLogsModel
