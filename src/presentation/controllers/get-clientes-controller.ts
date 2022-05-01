import { Controller, HttpResponse } from "@/presentation/protocols";
import { serverError, ok } from "@/presentation/helpers";
import { GetClientes } from "@/domain/usecases";

export class GetClientesController implements Controller {
	constructor(private readonly getClientes: GetClientes) {}

	async handle(): Promise<HttpResponse> {
		try {
			const clientes = await this.getClientes.getAll();
			return ok(clientes);
		} catch (error) {
			return serverError(error);
		}
	}
}

export namespace GetClientesController {
	export type Request = {};
}
