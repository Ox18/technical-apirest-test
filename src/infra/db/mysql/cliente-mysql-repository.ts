import { MySQLHelper } from "./mysql-helper";

import { CreateClienteRepository } from "@/data/protocols/db";
import { QueryBuilder } from "./query-builder";
import { CreateCliente } from "@/domain/usecases";

export class UserMySQLRepository implements CreateClienteRepository {
	private readonly tableName = "clientes";

	async create(params: CreateCliente.Params): Promise<boolean> {
		const sql = new QueryBuilder().insert(this.tableName, params).generate();

		await MySQLHelper.query(sql);

		return true;
	}
}
