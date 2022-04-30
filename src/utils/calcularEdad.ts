export const CalcularEdad = (fechaNacimiento: Date): number => {
	const fechaActual = new Date();
	const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
	const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
	const dia = fechaActual.getDate() - fechaNacimiento.getDate();

	if (mes < 0 || (mes === 0 && dia < 0)) {
		return edad - 1;
	}

	return edad;
};
