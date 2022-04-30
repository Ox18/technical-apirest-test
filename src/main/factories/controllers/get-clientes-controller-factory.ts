import { GetClientesController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetClientes } from "@/main/factories/usecases";

export const makeGetClientesController = (): Controller => {
	return new GetClientesController(makeDbGetClientes());
};
