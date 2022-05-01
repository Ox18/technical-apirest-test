"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kpiClientesPath = void 0;
exports.kpiClientesPath = {
    get: {
        tags: ["clientes"],
        summary: "API para obtener el KPI de clientes",
        description: "Obtener el promedio de edad entre todos los clientes y la desviación estándar de la misma",
        requestBody: {},
        responses: {
            200: {
                description: "Success",
                content: {
                    "application/json": {},
                },
            },
        },
    },
};
//# sourceMappingURL=kpideclientes-paths.js.map