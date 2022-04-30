"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetClientesController = void 0;
const controllers_1 = require("@/presentation/controllers");
const usecases_1 = require("@/main/factories/usecases");
const makeGetClientesController = () => {
    return new controllers_1.GetClientesController((0, usecases_1.makeDbGetClientes)());
};
exports.makeGetClientesController = makeGetClientesController;
//# sourceMappingURL=get-clientes-controller-factory.js.map