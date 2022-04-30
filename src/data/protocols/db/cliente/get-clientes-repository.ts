import { GetClientes } from "@/domain/usecases";

export interface GetClientesRepository {
	getAll(
		params: GetClientesRepository.Params
	): Promise<GetClientesRepository.Result>;
}

export namespace GetClientesRepository {
	export type Params = GetClientes.Params;

	export type Result = GetClientes.Result;
}
