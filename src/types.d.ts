import UserApi from './datasources/user';
import ExampleDatasource from './datasources/exampleDatasource';

export interface DataSourceConfig<TContext = any> {
    context: TContext;
}

export interface user {
    name: string;
    email: string;
    projects: object
}

export interface dataSourcesType {
    userAPI: UserApi;
    exampleDatasource: ExampleDatasource
}
