import { DataSource } from 'apollo-datasource';
import { DataSourceConfig } from '../types';
import users from '../../database/mockdb';

class UserApi extends DataSource {
    store: any;
    context: any;

    constructor() {
        super();
    }

    initialize(config: DataSourceConfig) {
        this.context = config.context;
    }

    getUsers = () => {
        return users;
    }
}

export default UserApi;