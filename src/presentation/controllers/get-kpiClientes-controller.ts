import { Controller, HttpResponse } from "@/presentation/protocols";
import { serverError, ok } from "@/presentation/helpers";
import { GetKpiClientes } from "@/domain/usecases";

export class GetKpiClientesController implements Controller {
	constructor(private readonly getKpiClientes: GetKpiClientes) {}

	async handle(): Promise<HttpResponse> {
		try {
			const kpiClientes = await this.getKpiClientes.getKpi();
			return ok(kpiClientes);
		} catch (error) {
			console.log(error);
			return serverError(error);
		}
	}
}
