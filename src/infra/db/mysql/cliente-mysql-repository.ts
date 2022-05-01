import { MySQLHelper } from "./mysql-helper";

import {
	CreateClienteRepository,
	GetClientesRepository,
	GetKpiClientesRepository,
} from "@/data/protocols/db";
import { QueryBuilder } from "./query-builder";
import { CreateCliente, GetClientes, GetKpiClientes } from "@/domain/usecases";
import { CalcularFechaMuerte } from "@/utils";
import { ClienteModel } from "@/domain/models";

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

	async getAll(): Promise<GetClientes.Result> {
		const sql = new QueryBuilder().selectAll().from(this.tableName).generate();

		let result = await MySQLHelper.query(sql);

		result.forEach((item: ClienteModel) => {
			item.fechaMuerte = CalcularFechaMuerte(item.fechaNacimiento);
		});

		return result;
	}

	async getKpi(): Promise<GetKpiClientes.Result> {
		const sql = new QueryBuilder()
			.select("AVG(edad) as promedio, STD(edad) as desviacionEstandar")
			.from(this.tableName)
			.generate();
		const result = await MySQLHelper.query(sql);
		const { promedio = 0, desviacionEstandar = 0 } = result[0];
		return {
			promedio: Number(Number(promedio).toFixed(1)),
			desviacionEstandar: Number(Number(desviacionEstandar).toFixed(1)),
		};
	}
}
