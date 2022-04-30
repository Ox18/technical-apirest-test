"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCreateCliente = void 0;
class DbCreateCliente {
    constructor(createClienteRepository) {
        this.createClienteRepository = createClienteRepository;
    }
    async create(params) {
        const response = await this.createClienteRepository.create(params);
        return response;
    }
}
exports.DbCreateCliente = DbCreateCliente;
//# sourceMappingURL=db-create-cliente.js.map