"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequest = void 0;
exports.badRequest = {
    description: "Request inválido",
    content: {
        "application/json": {
            schema: {
                $ref: "#/schemas/error",
            },
        },
    },
};
//# sourceMappingURL=bad-request.js.map