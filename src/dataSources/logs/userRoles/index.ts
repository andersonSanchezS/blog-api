// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IUserRolesModel } from './types'

const db = sequelize()

const UserRoleLogsModel = db.define<IUserRolesModel>('usersRoleLogs', {
    urId: {
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    urIdAuto: {
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    urDescription: Sequelize.STRING(255),
    urCode: Sequelize.STRING(255),
    urState: Sequelize.TINYINT,
    aLog: Sequelize.TINYINT,
    userId: Sequelize.STRING(255)
}, {
    timestamps: true,
    paranoid: true
})

export default UserRoleLogsModel