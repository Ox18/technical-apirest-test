import { CalcularEdad, FechaRandom } from "@/utils";

export const CalcularFechaMuerte = (
	fechaNacimiento: Date,
	edadMaxima: number = 99
): Date => {
	const edad = CalcularEdad(fechaNacimiento);

	if (edad > edadMaxima) {
		return new Date();
	}

	const fechaMinima = new Date(
		fechaNacimiento.getTime() + edad * 365 * 24 * 60 * 60 * 1000
	);
	const fechaMaxima = new Date(
		fechaNacimiento.getTime() + edadMaxima * 365 * 24 * 60 * 60 * 1000
	);

	return FechaRandom(fechaMinima, fechaMaxima);
};
