import { DataSource } from 'apollo-datasource';
import { DataSourceConfig } from '../types';
import users from '../../database/mockdb';

class ExampleDatasource extends DataSource {
    context: any;

    constructor() {
        super();
    }

    initialize(config: DataSourceConfig) {
        this.context = config.context;
    }

    exampleUsers = () => {
        return users;
    }
}

export default ExampleDatasource;