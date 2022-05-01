"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creaClientePath = void 0;
exports.creaClientePath = {
    post: {
        tags: ["clientes"],
        summary: "API para la creación de clientes",
        description: "Crear un cliente con los datos: nombre, apellido, edad y fecha de nacimiento",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/createClienteParams",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Cliente creado",
                content: {
                    "application/json": {
                        // return boolean
                        schema: {
                            type: "boolean",
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
//# sourceMappingURL=creacliente-path.js.map