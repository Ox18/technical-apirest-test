"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCreateCliente = void 0;
const usecases_1 = require("@/data/usecases");
const cliente_mysql_repository_1 = require("@/infra/db/mysql/cliente-mysql-repository");
const makeDbCreateCliente = () => {
    return new usecases_1.DbCreateCliente(new cliente_mysql_repository_1.UserMySQLRepository());
};
exports.makeDbCreateCliente = makeDbCreateCliente;
//# sourceMappingURL=create-cliente-factory.js.map