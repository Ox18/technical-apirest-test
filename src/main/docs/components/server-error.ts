export const serverError = {
	description: "Error interno de servidor",
	content: {
		"application/json": {
			schema: {
				$ref: "#/schemas/error",
			},
		},
	},
};
