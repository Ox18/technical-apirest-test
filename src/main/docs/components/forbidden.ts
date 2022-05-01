export const forbidden = {
	description: "Acesso denegado",
	content: {
		"application/json": {
			schema: {
				$ref: "#/schemas/error",
			},
		},
	},
};
