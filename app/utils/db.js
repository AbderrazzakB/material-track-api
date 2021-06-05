import mongoose from 'mongoose';

export default async () => {
  await mongoose.connect(process.env.CONNECTION_STRING_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: process.env.DB_NAME,
  });
  mongoose.set('debug', process.env.NODE_ENV === 'development');
};
