"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateClienteValidation = void 0;
const validators_1 = require("@/validation/validators");
const makeCreateClienteValidation = () => {
    const validations = [];
    for (const field of ["nombre", "apellido", "edad", "fechaNacimiento"]) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeCreateClienteValidation = makeCreateClienteValidation;
//# sourceMappingURL=create-cliente-validation-factory.js.map