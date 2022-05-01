export const listClientesPath = {
	get: {
		tags: ["clientes"],
		summary: "API para obtener el KPI de clientes",
		description:
			"Obtener el promedio de edad entre todos los clientes y la desviación estándar de la misma",
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
