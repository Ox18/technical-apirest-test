"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGetClientes = void 0;
class DbGetClientes {
    constructor(getClientesRepository) {
        this.getClientesRepository = getClientesRepository;
    }
    async getAll() {
        const response = await this.getClientesRepository.getAll();
        return response;
    }
}
exports.DbGetClientes = DbGetClientes;
//# sourceMappingURL=db-get-clientes.js.map