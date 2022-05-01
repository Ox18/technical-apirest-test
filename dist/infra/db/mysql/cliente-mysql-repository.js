"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMySQLRepository = void 0;
const mysql_helper_1 = require("./mysql-helper");
const query_builder_1 = require("./query-builder");
const utils_1 = require("@/utils");
class UserMySQLRepository {
    constructor() {
        this.tableName = "clientes";
    }
    async create(params) {
        const sql = new query_builder_1.QueryBuilder().insert(this.tableName, params).generate();
        await mysql_helper_1.MySQLHelper.query(sql);
        return true;
    }
    async getAll() {
        const sql = new query_builder_1.QueryBuilder().selectAll().from(this.tableName).generate();
        let result = await mysql_helper_1.MySQLHelper.query(sql);
        result.forEach((item) => {
            item.fechaMuerte = (0, utils_1.CalcularFechaMuerte)(item.fechaNacimiento);
        });
        return result;
    }
    async getKpi() {
        const sql = new query_builder_1.QueryBuilder()
            .select("AVG(edad) as promedio, STD(edad) as desviacionEstandar")
            .from(this.tableName)
            .generate();
        const result = await mysql_helper_1.MySQLHelper.query(sql);
        return result[0];
    }
}
exports.UserMySQLRepository = UserMySQLRepository;
//# sourceMappingURL=cliente-mysql-repository.js.map