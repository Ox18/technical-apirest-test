"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMySQLRepository = void 0;
const mysql_helper_1 = require("./mysql-helper");
const query_builder_1 = require("./query-builder");
class UserMySQLRepository {
    constructor() {
        this.tableName = "clientes";
    }
    async create(params) {
        const sql = new query_builder_1.QueryBuilder().insert(this.tableName, params).generate();
        await mysql_helper_1.MySQLHelper.query(sql);
        return true;
    }
}
exports.UserMySQLRepository = UserMySQLRepository;
//# sourceMappingURL=cliente-mysql-repository.js.map