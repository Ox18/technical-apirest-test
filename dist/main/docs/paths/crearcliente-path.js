"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearclientePath = void 0;
exports.crearclientePath = {
    post: {
        tags: ["clientes"],
        summary: "API para la creación de clientes",
        description: "Crear un cliente con los datos: nombre, apellido, edad y fecha de nacimiento",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/cliente",
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=crearcliente-path.js.map