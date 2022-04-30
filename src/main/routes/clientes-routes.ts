import { Router } from "express";
import { adaptRoute } from "@/main/adapters";
import {
	makeCreateClienteController,
	makeGetClientesController,
	makeGetKpiClientesController,
} from "@/main/factories/controllers";

export default (router: Router): void => {
	router.post("/creacliente", adaptRoute(makeCreateClienteController()));
	router.get("/listclientes", adaptRoute(makeGetClientesController()));
	router.get("/kpideclientes", adaptRoute(makeGetKpiClientesController()));
};
