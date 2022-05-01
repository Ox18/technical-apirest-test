"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = void 0;
exports.serverError = {
    description: "Error interno de servidor",
    content: {
        "application/json": {
            schema: {
                $ref: "#/schemas/error",
            },
        },
    },
};
//# sourceMappingURL=server-error.js.map