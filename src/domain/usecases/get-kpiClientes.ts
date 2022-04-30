export interface GetKpiClientes {
	getKpi(): Promise<GetKpiClientes.Result>;
}

export namespace GetKpiClientes {
	export type Result = {
		promedio: number;
		desviacionEstandar?: number;
	};
}
