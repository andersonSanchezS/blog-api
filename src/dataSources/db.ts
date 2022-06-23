/* eslint-disable no-console */
import { connect } from 'mongoose'
import { DB_USER, DB_PASS, DB_HOST, DB_NAME } from '@envs/index'

const DB: string = DB_HOST()
    .replace('<user>', DB_USER())
    .replace('<password>', DB_PASS())

// Connect to MongoDB

connect(DB, { dbName: DB_NAME() })
    .then(() => console.log('DB connected successfully!'))
    .catch(console.log)
