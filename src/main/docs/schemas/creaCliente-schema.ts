export const createClienteParams = {
	type: "object",
	properties: {
		nombre: {
			type: "string",
		},
		apellido: {
			type: "string",
		},
		edad: {
			type: "number",
		},
		fechaNacimiento: {
			type: "string",
			description: "RFC3339 Datetime to set",
			format: "date-time",
		},
	},
};
