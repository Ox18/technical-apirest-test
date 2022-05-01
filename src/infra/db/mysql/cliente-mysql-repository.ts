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
		// await MySQLHelper.query("truncate table clientes");
		const sql = new QueryBuilder().select("*").from(this.tableName).generate();

		let result = await MySQLHelper.query(sql);

		result.forEach((item: any) => {
			const { edad, fechaNacimiento } = item;
			// Calcular fecha de muerte de manera aleatoria
			const edadMaximaDeHumano = 99;

			// const fechaActualDeEdad = new Date()
			// const fechaMinima = new Date(fechaNacimiento);
			// const fechaMaxima =
			// 	(edadMaximaDeHumano - edad) * 365 * 24 * 60 * 60 * 1000;
			// const fechaMuerte = new Date(fechaMinima.getTime() + fechaMaxima);

			// item.fechaMuerte = fechaMuerte;
		});

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
