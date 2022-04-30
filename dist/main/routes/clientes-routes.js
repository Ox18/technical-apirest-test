"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const controllers_1 = require("@/main/factories/controllers");
exports.default = (router) => {
    router.post("/clientes", (0, adapters_1.adaptRoute)((0, controllers_1.makeCreateClienteController)()));
};
//# sourceMappingURL=clientes-routes.js.map