"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const controllers_1 = require("@/main/factories/controllers");
exports.default = (router) => {
    router.post("/creacliente", (0, adapters_1.adaptRoute)((0, controllers_1.makeCreateClienteController)()));
    router.get("/listclientes", (0, adapters_1.adaptRoute)((0, controllers_1.makeGetClientesController)()));
    router.get("/kpideclientes", (0, adapters_1.adaptRoute)((0, controllers_1.makeGetKpiClientesController)()));
};
//# sourceMappingURL=clientes.routes.js.map