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
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/kpiCliente",
                        },
                    },
                },
            },
            400: {
                $ref: "#/components/badRequest",
            },
            404: {
                $ref: "#/components/notFound",
            },
            500: {
                $ref: "#/components/serverError",
            },
        },
    },
};
//# sourceMappingURL=kpideclientes-path.js.map