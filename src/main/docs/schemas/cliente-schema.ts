export const cliente = {
	type: "object",
	properties: {
		id: {
			type: "number",
		},
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
		},
		fechaMuerte: {
			type: "string",
			description: "RFC3339 Datetime to set",
			format: "date-time",
		},
	},
};
