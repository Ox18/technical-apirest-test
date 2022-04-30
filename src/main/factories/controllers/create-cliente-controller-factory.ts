import { CreateClienteController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbCreateCliente } from "@/main/factories/usecases";

export const makeCreateClienteController = (): Controller => {
	return new CreateClienteController(makeDbCreateCliente());
};
