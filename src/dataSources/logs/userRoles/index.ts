// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IUserRolesLogsModel } from './types'

const db = sequelize()

const UserRoleLogsModel = db.define<IUserRolesLogsModel>(
    'usersRoleLogs',
    {
        urId: {
            type: Sequelize.STRING(255),
            primaryKey: true
        },
        urIdAuto: {
            type: Sequelize.INTEGER
        },
        urDescription: Sequelize.STRING(255),
        urCode: Sequelize.STRING(255),
        urState: Sequelize.TINYINT,
        aLog: Sequelize.TINYINT,
        userId: Sequelize.STRING(255)
    },
    {
        timestamps: true,
        paranoid: true
    }
)

export default UserRoleLogsModel
