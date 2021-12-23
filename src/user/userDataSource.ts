import { DataSource } from 'apollo-datasource';
import Database from '../database';
import { DataSourceConfig } from '../types';
import User from './userModel';

const database = Database.getInstance();

class UserDataSource extends DataSource {
  store: any;
  context: any;

  constructor() {
    super();
  };

  initialize(config: DataSourceConfig) {
    this.context = config.context;
  };

  createUser = async(username: string, password: string) => {
    const user = new User({ username: username, password: password });
    return (await database.save(user))._id;
  };
}

export default UserDataSource;
