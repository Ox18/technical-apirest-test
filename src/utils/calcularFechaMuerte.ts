import { CalcularEdad } from "@/utils";

export const CalcularFechaMuerte = (
	fechaNacimiento: Date,
	edadMaxima: number = 99
): Date => {
	const edad = CalcularEdad(fechaNacimiento);

	if (edad > edadMaxima) {
		return new Date();
	}

	const fechaMinima = new Date(fechaNacimiento);
	const fechaMaxima = (edadMaxima - edad) * 365 * 24 * 60 * 60 * 1000;
	const fechaMuerte = new Date(fechaMinima.getTime() + fechaMaxima);

	return fechaMuerte;
};
