import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import config from './config'
import { connectDb } from './utils/db'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// eslint-disable-next-line import/prefer-default-export
export const main = async () => {
  await connectDb()
  app.listen(config.port, () => console.log(`server started on ${config.port}`))
}
