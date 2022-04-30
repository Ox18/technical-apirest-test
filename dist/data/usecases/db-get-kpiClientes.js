"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGetKpiClientes = void 0;
class DbGetKpiClientes {
    constructor(getKpiClientesRepository) {
        this.getKpiClientesRepository = getKpiClientesRepository;
    }
    async getKpi() {
        const response = await this.getKpiClientesRepository.getKpi();
        return response;
    }
}
exports.DbGetKpiClientes = DbGetKpiClientes;
//# sourceMappingURL=db-get-kpiClientes.js.map