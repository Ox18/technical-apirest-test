import { DbGetKpiClientes } from "@/data/usecases";
import { UserMySQLRepository } from "@/infra/db/mysql/cliente-mysql-repository";

export const makeDbGetKpiClientes = (): DbGetKpiClientes => {
	return new DbGetKpiClientes(new UserMySQLRepository());
};
