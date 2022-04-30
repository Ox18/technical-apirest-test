import { CreateCliente } from "@/domain/usecases";

export interface CreateClienteRepository {
	create(params: CreateClienteRepository.Params): Promise<CreateCliente.Result>;
}

export namespace CreateClienteRepository {
	export type Params = CreateCliente.Params;

	export type Result = CreateCliente.Result;
}
