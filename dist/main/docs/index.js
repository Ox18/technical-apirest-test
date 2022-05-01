"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("./path"));
const schemas = __importStar(require("./schemas"));
const components_1 = __importDefault(require("./components"));
exports.default = {
    openapi: "3.0.0",
    info: {
        title: "API Rest - Llatan",
        description: "Documentación de la API Rest para la prueba técnica de Llatan",
        version: "1.0.0",
        contact: {
            name: "Wilmer Delgado",
            email: "wdelgadoalama@gmail.com",
            url: "https://www.linkedin.com/in/wilmerdelgadoalama",
        },
    },
    servers: [
        {
            url: "/api",
            description: "Servidor Principal",
        },
    ],
    tags: [
        {
            name: "clientes",
            description: "Rutas para el manejo de clientes",
        },
    ],
    paths: path_1.default,
    schemas,
    components: components_1.default,
};
//# sourceMappingURL=index.js.map