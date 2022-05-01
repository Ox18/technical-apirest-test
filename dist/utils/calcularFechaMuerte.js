"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcularFechaMuerte = void 0;
const utils_1 = require("@/utils");
const CalcularFechaMuerte = (fechaNacimiento, edadMaxima = 99) => {
    const edad = (0, utils_1.CalcularEdad)(fechaNacimiento);
    if (edad > edadMaxima) {
        return new Date();
    }
    const fechaMinima = new Date(fechaNacimiento);
    const fechaMaxima = (edadMaxima - edad) * 365 * 24 * 60 * 60 * 1000;
    const fechaMuerte = new Date(fechaMinima.getTime() + fechaMaxima);
    return fechaMuerte;
};
exports.CalcularFechaMuerte = CalcularFechaMuerte;
//# sourceMappingURL=calcularFechaMuerte.js.map