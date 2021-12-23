import UserDataSource from './user/userDataSource';

export interface DataSourceConfig<TContext = any> {
  context: TContext;
}

export interface userType {
  _id: string;
  username: string;
  password: string;
}

export interface Model {
  save: Promise
}

export interface dataSourcesType {
  user: UserDataSource;
}
