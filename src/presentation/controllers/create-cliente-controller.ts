import { Controller, HttpResponse, Validation } from "@/presentation/protocols";
import { serverError, ok, badRequest } from "@/presentation/helpers";
import { CreateCliente } from "@/domain/usecases";

export class CreateClienteController implements Controller {
	constructor(
		private readonly validation: Validation,
		private readonly createCliente: CreateCliente
	) {}

	async handle(
		request: CreateClienteController.Request
	): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(request);
			if (error) {
				return badRequest(error);
			}
			
			const cliente = await this.createCliente.create(request);
			return ok(cliente);
		} catch (error) {
			console.log(error);
			return serverError(error);
		}
	}
}

export namespace CreateClienteController {
	export type Request = CreateCliente.Params;

	export type Response = CreateCliente.Result;
}
