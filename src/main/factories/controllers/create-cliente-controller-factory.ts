import { CreateClienteController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbCreateCliente } from "@/main/factories/usecases";
import { makeCreateClienteValidation } from "./create-cliente-validation-factory";

export const makeCreateClienteController = (): Controller => {
	return new CreateClienteController(
		makeCreateClienteValidation(),
		makeDbCreateCliente()
	);
};
