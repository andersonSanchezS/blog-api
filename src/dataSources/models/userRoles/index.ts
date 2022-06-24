// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IUserRolesLogModel } from './types'

const db = sequelize()

const UserRolesModel = db.define<IUserRolesLogModel>('userRolesLogs', {
    urId: {
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    urIdAuto: {
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    urName: Sequelize.STRING(255),
    urLastName: Sequelize.STRING(255),
    urEmail: Sequelize.STRING(255),
    urPassword: Sequelize.STRING(255),
    urState: Sequelize.TINYINT,
    urGoogleAuth: Sequelize.TINYINT,
    urEdited: Sequelize.TINYINT,
    aLog: Sequelize.TINYINT,
    userId: Sequelize.STRING(255)
}, {
    timestamps: true,
    paranoid: true
})

export default UserRolesModel