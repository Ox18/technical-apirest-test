import { ConnectionOptions } from "mysql2";
import env from "@/main/config/env";

export const CONFIG: ConnectionOptions = {
	host: env.MYSQL_DB_HOST,
	user: env.MYSQL_DB_USER,
	password: env.MYSQL_DB_PASSWORD,
	database: env.MYSQL_DB_NAME,
};
