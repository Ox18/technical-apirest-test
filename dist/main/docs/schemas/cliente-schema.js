"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliente = void 0;
exports.cliente = {
    type: "object",
    properties: {
        id: {
            type: "number",
        },
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
        },
        fechaMuerte: {
            type: "string",
            description: "RFC3339 Datetime to set",
            format: "date-time",
        },
    },
};
//# sourceMappingURL=cliente-schema.js.map