import { DbGetClientes } from "@/data/usecases";
import { UserMySQLRepository } from "@/infra/db/mysql/cliente-mysql-repository";

export const makeDbGetClientes = (): DbGetClientes => {
	return new DbGetClientes(new UserMySQLRepository());
};
