"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbGetKpiClientes = void 0;
const usecases_1 = require("@/data/usecases");
const cliente_mysql_repository_1 = require("@/infra/db/mysql/cliente-mysql-repository");
const makeDbGetKpiClientes = () => {
    return new usecases_1.DbGetKpiClientes(new cliente_mysql_repository_1.UserMySQLRepository());
};
exports.makeDbGetKpiClientes = makeDbGetKpiClientes;
//# sourceMappingURL=get-kpiClientes-factory.js.map