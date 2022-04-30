"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbGetClientes = void 0;
const usecases_1 = require("@/data/usecases");
const cliente_mysql_repository_1 = require("@/infra/db/mysql/cliente-mysql-repository");
const makeDbGetClientes = () => {
    return new usecases_1.DbGetClientes(new cliente_mysql_repository_1.UserMySQLRepository());
};
exports.makeDbGetClientes = makeDbGetClientes;
//# sourceMappingURL=get-clientes-factory.js.map