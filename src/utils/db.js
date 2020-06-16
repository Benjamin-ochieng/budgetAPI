import mongoose from 'mongoose'
import config from '../config'

// eslint-disable-next-line import/prefer-default-export
export const connectDb = (
  uri = config.dbUrl,
  options = {
    useFindAndModify: false,
    useCreateIndex: true,
  }
) => {
  return mongoose
    .connect(uri, {
      ...options,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => console.log('Connected to the database'),
      (err) => console.error(err)
    )
}
