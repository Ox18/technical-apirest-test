import { CreateCliente } from "@/domain/usecases";
import { CreateClienteRepository } from "@/data/protocols/db/cliente";

export class DbCreateCliente implements CreateCliente {
	constructor(
		private readonly createClienteRepository: CreateClienteRepository
	) {}

	async create(params: CreateCliente.Params): Promise<CreateCliente.Result> {
		const response = await this.createClienteRepository.create(params);
		return response;
	}
}
