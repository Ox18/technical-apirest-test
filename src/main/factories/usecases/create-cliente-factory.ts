import { DbCreateCliente } from "@/data/usecases";
import { UserMySQLRepository } from "@/infra/db/mysql/cliente-mysql-repository";

export const makeDbCreateCliente = (): DbCreateCliente => {
	return new DbCreateCliente(new UserMySQLRepository());
};
