export const badRequest = {
	description: "Request inválido",
	content: {
		"application/json": {
			schema: {
				$ref: "#/schemas/error",
			},
		},
	},
};
