"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteController = void 0;
const helpers_1 = require("@/presentation/helpers");
class CreateClienteController {
    constructor(createCliente) {
        this.createCliente = createCliente;
    }
    async handle(request) {
        try {
            const cliente = await this.createCliente.create(request);
            return (0, helpers_1.ok)(cliente);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.CreateClienteController = CreateClienteController;
//# sourceMappingURL=create-cliente-controller.js.map