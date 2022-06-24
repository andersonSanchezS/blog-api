// /* eslint-disable @typescript-eslint/no-explicit-any */

// // Id Generator
// import { nanoid } from 'nanoid'

// // Sequelize and database connection
// import sequelize from '@db/db'

// // Sequelize Types
// import Sequelize from 'sequelize'

// // users interface
// import { IUserModel } from './types'

// // users logs model
// import ProjectLog from '@logs/userRoles/index'

// // Import required models for relations
// //import UserModel from '@models/users/index'
// const db = sequelize()

// const ProjectModel = db.define<IUserModel>('project', {
//     pIdAuto: {
//         type: Sequelize.INTEGER,
//         unique: true,
//         autoIncrement: true
//     },

//     pId: {
//         type: Sequelize.STRING(50),
//         primaryKey: true
//     },

//     pName: {
//         type: Sequelize.STRING(255),
//         allowNull: false,
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//     },

//     pPriority: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//     },

//     pDescription: {
//         type: Sequelize.STRING(255),
//         allowNull: false,
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//     },

//     pState: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//     }

// }, {
//     timestamps: true,
//     paranoid: true,
//     hooks: {
//         beforeCreate: (attributes: any, options: any) => {
//             const id = !!attributes.aId
//             options.rqType = options.updateOnDuplicate ? id ? 'BULKUPDATE' : 'BULKCREATE' : 'CREATE'
//             attributes.pId = attributes.pId || nanoid(32)
//             return options
//         },
//         afterUpdate: (attributes: any, options: any) => {
//             ProjectLog.create({
//                 ...attributes?.dataValues,
//                 aLog: 2,
//                 userId: options.context?.uId,
//                 createdAt: undefined,
//                 updatedAt: undefined,
//                 deletedAt: undefined
//             })
//                 .catch(() => undefined)

//             // Return registered attributes
//             return attributes
//         },
//         afterCreate: (attributes: any, options: any) => {
//             ProjectLog.create({
//                 ...attributes?.dataValues,
//                 aLog: options.rqType === 'BULKUPDATE' ? 2 : 1,
//                 userId: options.context?.uId,
//                 createdAt: undefined,
//                 updatedAt: undefined,
//                 deletedAt: undefined
//             })
//                 .catch(() => undefined)

//             // Return registered attributes
//             return attributes

//         }
//     }
// })

// ProjectModel.hasMany(TaskModel, {
//     foreignKey: 'projectId',
//     sourceKey: 'pId'
// })

// TaskModel.belongsTo(ProjectModel, {
//     foreignKey: 'projectId',
//     targetKey: 'pId'
// })

// export default ProjectModel