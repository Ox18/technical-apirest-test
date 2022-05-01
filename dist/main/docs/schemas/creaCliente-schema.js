"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClienteParams = void 0;
exports.createClienteParams = {
    type: "object",
    properties: {
        nombre: {
            type: "string",
        },
        apellido: {
            type: "string",
        },
        edad: {
            type: "number",
        },
        fechaNacimiento: {
            type: "string",
            description: "RFC3339 Datetime to set",
            format: "date-time",
        },
    },
};
//# sourceMappingURL=creaCliente-schema.js.map