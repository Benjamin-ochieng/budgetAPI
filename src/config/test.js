import dotenv from 'dotenv'

dotenv.config()

const testConfig = {
  // TODO: add a secrets property
  dbUrl: process.env.TEST_DBURL,
}

export default testConfig
