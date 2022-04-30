import { MySQLHelper } from "./mysql-helper";

import {
	CreateClienteRepository,
	GetClientesRepository,
	GetKpiClientesRepository,
} from "@/data/protocols/db";
import { QueryBuilder } from "./query-builder";
import { CreateCliente, GetClientes, GetKpiClientes } from "@/domain/usecases";

export class UserMySQLRepository
	implements
		CreateClienteRepository,
		GetClientesRepository,
		GetKpiClientesRepository
{
	private readonly tableName = "clientes";

	async create(params: CreateCliente.Params): Promise<boolean> {
		const sql = new QueryBuilder().insert(this.tableName, params).generate();

		await MySQLHelper.query(sql);

		return true;
	}

	async getAll(params: GetClientes.Params): Promise<GetClientes.Result> {
		const sql = new QueryBuilder().select("*").from(this.tableName).generate();

		const result = await MySQLHelper.query(sql);

		return result;
	}

	async getKpi(): Promise<GetKpiClientes.Result> {
		const sql = new QueryBuilder()
			.select("AVG(edad) as promedio, STD(edad) as desviacionEstandar")
			.from(this.tableName)
			.generate();
		const result = await MySQLHelper.query(sql);

		return result[0];
	}
}
