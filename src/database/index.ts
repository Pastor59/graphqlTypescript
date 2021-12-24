import mongoose from 'mongoose';
import { Save, FindOne } from '../types';

class Database {
  // eslint-disable-next-line no-use-before-define
  private static instance: Database;
  private constructor() { };
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  };
  connect = async() => {
    // eslint-disable-next-line no-undef
    const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
      .then(() => {
        // eslint-disable-next-line no-undef
        console.log(`Connected to DB\nHost: ${DB_HOST}\nName: ${DB_NAME}`);
      })
      .catch((error) => {
        // eslint-disable-next-line no-undef
        console.log(`${error}\nError connecting to DB\nHost: ${DB_HOST}\nName: ${DB_NAME}\nUser: ${DB_USER}`);
      });
  };
  save = async(model: Save) => {
    const modelSaved = await model.save();
    return modelSaved;
  };
  findOne = async(model: FindOne) => {
    return await model.findOne();
  };
};

export default Database;
