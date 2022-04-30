"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateClienteController = void 0;
const controllers_1 = require("@/presentation/controllers");
const usecases_1 = require("@/main/factories/usecases");
const makeCreateClienteController = () => {
    return new controllers_1.CreateClienteController((0, usecases_1.makeDbCreateCliente)());
};
exports.makeCreateClienteController = makeCreateClienteController;
//# sourceMappingURL=create-cliente-controller-factory.js.map