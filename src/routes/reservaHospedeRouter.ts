import { Router } from "express";
import ReservaHospedeController from "../controllers/ReservaHospedeController";


const reservaHospedeRouter = Router();
const reservaHospedeController = new ReservaHospedeController();

reservaHospedeRouter.get("/buscarReservaHospede", reservaHospedeController.buscarReservaHospede);
reservaHospedeRouter.post("/cadastrarReservaHospede", reservaHospedeController.cadastrarReservaHospede);
reservaHospedeRouter.put("/atualizarReservaHospede/:idreserva", reservaHospedeController.updateReservaHospede);


export default reservaHospedeRouter;