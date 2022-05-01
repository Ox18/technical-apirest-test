"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const env_1 = __importDefault(require("@/main/config/env"));
exports.CONFIG = {
    host: env_1.default.MYSQL_DB_HOST,
    user: env_1.default.MYSQL_DB_USER,
    password: env_1.default.MYSQL_DB_PASSWORD,
    database: env_1.default.MYSQL_DB_NAME,
};
//# sourceMappingURL=mysql-config.js.map