import { ClienteModel } from "../models";

export interface GetClientes {
	getAll(): Promise<GetClientes.Result>;
}

export namespace GetClientes {
	export type Result = ClienteModel[];
}
