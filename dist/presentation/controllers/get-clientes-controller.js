"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientesController = void 0;
const helpers_1 = require("@/presentation/helpers");
class GetClientesController {
    constructor(getClientes) {
        this.getClientes = getClientes;
    }
    async handle() {
        try {
            const clientes = await this.getClientes.getAll();
            return (0, helpers_1.ok)(clientes);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.GetClientesController = GetClientesController;
//# sourceMappingURL=get-clientes-controller.js.map