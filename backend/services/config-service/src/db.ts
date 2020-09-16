import { connection, connect } from 'mongoose';

export default (uri: string) => {
  const dbConnect = async () => {
    try {
      await connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.info(`Successfully connected to ${uri}`);
    } catch (error) {
      console.error(`Error connecting to database with uri ${uri} and error: `, error);
      process.exit(1);
    }
  };
  dbConnect();
  connection.on('disconnected', dbConnect);
};
