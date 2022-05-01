import paths from "./path";
import * as schemas from "./schemas";
import components from "./components";

export default {
	openapi: "3.0.0",
	info: {
		title: "API Rest - Llatan",
		description:
			"Documentación de la API Rest para la prueba técnica de Llatan",
		version: "1.0.0",
		contact: {
			name: "Wilmer Delgado",
			email: "wdelgadoalama@gmail.com",
			url: "https://www.linkedin.com/in/wilmerdelgadoalama",
		},
	},
	servers: [
		{
			url: "/api",
			description: "Servidor Principal",
		},
	],
	tags: [
		{
			name: "clientes",
			description: "Rutas para el manejo de clientes",
		},
	],
	paths,
	schemas,
	components,
};
