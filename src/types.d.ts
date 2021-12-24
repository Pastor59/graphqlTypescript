import UserDataSource from './user/userDataSource';

export interface DataSourceConfig<TContext = any> {
  context: TContext;
}

export interface userType {
  _id: string;
  username: string;
  password: string;
}

export interface Save {
  save: Promise
  findOne: Promise
}

export interface FindOne {
  findOne: Promise
  select: Promise
}

export interface dataSourcesType {
  user: UserDataSource;
}

export type Algorithm =
    'HS256' | 'HS384' | 'HS512' |
    'RS256' | 'RS384' | 'RS512' |
    'ES256' | 'ES384' | 'ES512' |
    'PS256' | 'PS384' | 'PS512' |
    'none';
