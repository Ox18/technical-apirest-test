import { GetClientes } from "@/domain/usecases";
import { GetClientesRepository } from "@/data/protocols/db/cliente";

export class DbGetClientes implements GetClientes {
	constructor(private readonly getClientesRepository: GetClientesRepository) {}

	async getAll(): Promise<GetClientes.Result> {
		const response = await this.getClientesRepository.getAll();
		return response;
	}
}
