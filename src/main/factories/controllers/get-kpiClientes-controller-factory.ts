import { GetKpiClientesController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetKpiClientes } from "@/main/factories/usecases";

export const makeGetKpiClientesController = (): Controller => {
	return new GetKpiClientesController(makeDbGetKpiClientes());
};
