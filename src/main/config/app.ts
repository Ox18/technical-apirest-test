import express, { Express } from "express";
import setupRoutes from "@/main/config/routes";
import setupMiddlewares from "@/main/config/middlewares";
import setupSwagger from "@/main/config/swagger";

export const setupApp = async (): Promise<Express> => {
	const app = express();
	setupSwagger(app);
	setupMiddlewares(app);
	setupRoutes(app);
	app.use(express.json());
	return app;
};
