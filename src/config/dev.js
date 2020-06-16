import dotenv from 'dotenv'

dotenv.config()

const devConfig = {
  // TODO: add a secrets property
  dbUrl: process.env.DEV_DBURL,
}

export default devConfig
