import { Router } from "express";
import HospedeController from "../controllers/HospedeController";


const hospedeRouter = Router();
const hospedeController = new HospedeController();


hospedeRouter.post("/cadastrarHospede", hospedeController.createHospede);
hospedeRouter.get("/listarHospedes", hospedeController.listarHospedes);

export default hospedeRouter;