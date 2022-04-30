import { Controller, HttpResponse } from "@/presentation/protocols";
import { serverError, ok } from "@/presentation/helpers";
import { CreateCliente } from "@/domain/usecases";
import { CalcularEdad } from "@/utils";

export class CreateClienteController implements Controller {
	constructor(private readonly createCliente: CreateCliente) {}

	async handle(
		request: CreateClienteController.Request
	): Promise<HttpResponse> {
		try {
			const cliente = await this.createCliente.create({
				...request,
				edad: CalcularEdad(new Date(request.fechaNacimiento)),
			});
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
