import {
	cors,
	bodyParser,
	contentType,
	morganMiddleware,
} from "@/main/middlewares";

import { Express } from "express";

export default (app: Express): void => {
	app.use(bodyParser);
	app.use(cors);
	app.use(morganMiddleware);
	app.use(contentType);
};
