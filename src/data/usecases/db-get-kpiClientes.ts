import { GetKpiClientes } from "@/domain/usecases";
import { GetKpiClientesRepository } from "@/data/protocols/db/cliente";

export class DbGetKpiClientes implements GetKpiClientes {
	constructor(
		private readonly getKpiClientesRepository: GetKpiClientesRepository
	) {}

	async getKpi(): Promise<GetKpiClientes.Result> {
		const response = await this.getKpiClientesRepository.getKpi();
		return response;
	}
}
