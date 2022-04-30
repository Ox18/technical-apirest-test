import { ClienteModel } from "../models";

export interface GetClientes {
	getAll(params: GetClientes.Params): Promise<GetClientes.Result>;
}

export namespace GetClientes {
	export type Params = {};

	export type Result = ClienteModel[];
}
