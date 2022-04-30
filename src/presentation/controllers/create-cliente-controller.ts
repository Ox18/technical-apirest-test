import { Controller, HttpResponse } from "@/presentation/protocols";
import { serverError, ok } from "@/presentation/helpers";
import { CreateCliente } from "@/domain/usecases";

export class CreateClienteController implements Controller {
	constructor(private readonly createCliente: CreateCliente) {}

	async handle(
		request: CreateClienteController.Request
	): Promise<HttpResponse> {
		try {
			const cliente = await this.createCliente.create(request);
			return ok(cliente);
		} catch (error) {
			return serverError(error);
		}
	}
}

export namespace CreateClienteController {
	export type Request = {
		nombre: string;
		apellido: string;
		edad: number;
		fechaNacimiento: Date;
	};

	export type Response = boolean;
}
