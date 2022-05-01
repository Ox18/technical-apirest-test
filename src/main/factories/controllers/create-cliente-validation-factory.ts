import {
	ValidationComposite,
	RequiredFieldValidation,
} from "@/validation/validators";
import { Validation } from "@/presentation/protocols";

export const makeCreateClienteValidation = (): ValidationComposite => {
	const validations: Validation[] = [];

	for (const field of ["nombre", "apellido", "edad", "fechaNacimiento"]) {
		validations.push(new RequiredFieldValidation(field));
	}
    
	return new ValidationComposite(validations);
};
