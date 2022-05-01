"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor(error) {
        super(error.message);
        this.name = "ServerError";
        this.stack = error.stack;
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=server-error.js.map