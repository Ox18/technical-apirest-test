"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcularEdad = void 0;
const CalcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    const dia = fechaActual.getDate() - fechaNacimiento.getDate();
    if (mes < 0 || (mes === 0 && dia < 0)) {
        return edad - 1;
    }
    return edad;
};
exports.CalcularEdad = CalcularEdad;
//# sourceMappingURL=calcularEdad.js.map