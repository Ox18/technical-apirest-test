import { GetClientes } from "@/domain/usecases";

export interface GetClientesRepository {
	getAll(): Promise<GetClientesRepository.Result>;
}

export namespace GetClientesRepository {
	export type Result = GetClientes.Result;
}
