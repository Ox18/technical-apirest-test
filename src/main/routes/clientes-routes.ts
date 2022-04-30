import { Router } from "express";
import { adaptRoute } from "@/main/adapters";
import { makeCreateClienteController } from "@/main/factories/controllers";

export default (router: Router): void => {
	router.post("/clientes", adaptRoute(makeCreateClienteController()));
};
