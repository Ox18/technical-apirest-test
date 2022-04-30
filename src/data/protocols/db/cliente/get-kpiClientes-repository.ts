import { GetKpiClientes } from "@/domain/usecases";

export interface GetKpiClientesRepository {
	getKpi(): Promise<GetKpiClientesRepository.Result>;
}

export namespace GetKpiClientesRepository {
	export type Result = GetKpiClientes.Result;
}
