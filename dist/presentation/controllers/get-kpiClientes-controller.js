"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetKpiClientesController = void 0;
const helpers_1 = require("@/presentation/helpers");
class GetKpiClientesController {
    constructor(getKpiClientes) {
        this.getKpiClientes = getKpiClientes;
    }
    async handle() {
        try {
            const kpiClientes = await this.getKpiClientes.getKpi();
            return (0, helpers_1.ok)(kpiClientes);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.GetKpiClientesController = GetKpiClientesController;
//# sourceMappingURL=get-kpiClientes-controller.js.map