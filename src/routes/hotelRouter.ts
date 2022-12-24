import { Router } from "express";
import HotelController from "../controllers/HotelController";


const hotelRouter = Router();

const hotelController = new HotelController();


hotelRouter.get("/buscarHotel", hotelController.buscarHotel);
hotelRouter.post("/cadastrarHotel", hotelController.cadastrarHotel);
hotelRouter.put("/atualizarHotel", hotelController.atualizarHotel);




export default hotelRouter;