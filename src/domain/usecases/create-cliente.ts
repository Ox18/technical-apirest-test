export interface CreateCliente {
	create(params: CreateCliente.Params): Promise<CreateCliente.Result>;
}

export namespace CreateCliente {
	export type Params = {
		nombre: string;
		apellido: string;
		edad: number;
		fechaNacimiento: Date;
	};

	export type Result = boolean;
}
