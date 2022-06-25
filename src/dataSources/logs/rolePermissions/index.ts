// Sequelize and database connection
import sequelize from '@db/db'

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IRolePermissionsLogsModel } from './types'

const db = sequelize()

const RolePermissionLogsModel = db.define<IRolePermissionsLogsModel>(
    'rolesPermissionsLogs',
    {
        rpId: {
            type: Sequelize.STRING(255),
            primaryKey: true
        },
        rpIdAuto: {
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        roleId: Sequelize.STRING(255),
        rpPermission: Sequelize.STRING(255),
        rpState: Sequelize.TINYINT,
        aLog: Sequelize.TINYINT,
        userId: Sequelize.STRING(255)
    },
    {
        timestamps: true,
        paranoid: true
    }
)

export default RolePermissionLogsModel
