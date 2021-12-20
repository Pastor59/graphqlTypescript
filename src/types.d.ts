import UserApi from "./datasources/user";
import UserApi from "./datasources/exampleDatasource";

export interface DataSourceConfig<TContext = any> {
    context: TContext;
    cache: KeyValueCache;
}

export interface user {
    name: string;
    email: string;
    projects: object
}

export interface dataSources {
    userAPI: UserApi;
    exampleDatasource: ExampleDatasource
}