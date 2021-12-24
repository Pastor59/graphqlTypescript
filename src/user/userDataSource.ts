import { DataSource } from 'apollo-datasource';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
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
    // eslint-disable-next-line no-undef
    const { SALT_ROUNDS } = process.env;
    const user = new User({ username: username, password: await bcrypt.hash(password, parseInt(SALT_ROUNDS!, 10)) });
    return (await database.save(user))._id;
  };

  login = async(username: string, password: string) => {
    const userQuery = User.where({ username: username });
    const userDB = await userQuery.findOne(userQuery).select([ 'username', 'password' ]);
    const isSamePassword = await bcrypt.compare(password, userDB.password);
    if (isSamePassword) {
      return this.generateToken(userDB);
    }
    throw new Error('User not exists or invalid password');
  };

  generateToken = (userDB: any) => {
    const { id, username } = userDB;
    // eslint-disable-next-line no-undef
    const { SECRET, JWT_EXPIRE_TIME } = process.env;
    // No way to use env variable for algorithm
    return jwt.sign({ username: username }, SECRET!, { algorithm: 'HS256', subject: id, expiresIn: JWT_EXPIRE_TIME! });
  };

  saveCoordinates = async(latitude: number, longitude: number, userID: string) => {
    const coordinate = {
      date: new Date().getTime(),
      coordinate: {
        latitude: latitude,
        longitude: longitude
      }
    };
    await User.findByIdAndUpdate({ _id: userID }, { $push: { positions: coordinate } });
    return 'OK';
  };
}

export default UserDataSource;
