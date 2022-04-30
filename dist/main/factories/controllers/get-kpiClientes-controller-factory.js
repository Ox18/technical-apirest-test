"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetKpiClientesController = void 0;
const controllers_1 = require("@/presentation/controllers");
const usecases_1 = require("@/main/factories/usecases");
const makeGetKpiClientesController = () => {
    return new controllers_1.GetKpiClientesController((0, usecases_1.makeDbGetKpiClientes)());
};
exports.makeGetKpiClientesController = makeGetKpiClientesController;
//# sourceMappingURL=get-kpiClientes-controller-factory.js.map