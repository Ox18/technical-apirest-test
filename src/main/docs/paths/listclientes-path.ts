export const listClientesPath = {
	get: {
		tags: ["clientes"],
		summary: "API para obtener la lista de clientes",
		description:
			"Lista de personas con todos los datos + fecha probable de muerte de cada una",
		requestBody: {},
		responses: {
			200: {
				description: "Success",
				content: {
					"application/json": {
						schema: {
							$ref: "#/schemas/listclientes",
						},
					},
				},
			},
			400: {
				$ref: "#/components/badRequest",
			},
			404: {
				$ref: "#/components/notFound",
			},
			500: {
				$ref: "#/components/serverError",
			},
		},
	},
};
