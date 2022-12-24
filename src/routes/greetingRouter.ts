import { Router } from "express";
import greetingController from "../controllers/greetingController";

const greetingRouter = Router();


greetingRouter.use("/", greetingController.index);


export default greetingRouter;