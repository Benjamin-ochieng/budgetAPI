import { merge } from 'lodash'
import dotenv from 'dotenv'
import devConfig from './dev'
import testConfig from './test'

dotenv.config()

const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'dev',
  isTest: env === 'test',
  port: 3000,
  // TODO: add a secrets property
}

let currentConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    currentConfig = devConfig
    break
  case 'test':
    currentConfig = testConfig
    break
  default:
    currentConfig = devConfig
}

export default merge(baseConfig, currentConfig)
