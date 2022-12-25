import express from "express";
import 'reflect-metadata';
import cors from "cors";
import dotenv from 'dotenv';
import { AppDataSource } from "./data-source";
import greetingRouter from "./routes/greetingRouter";
import hotelRouter from "./routes/hotelRouter";
import hospedeRouter from "./routes/hospedeRouter";
import reservaHospedeRouter from "./routes/reservaHospedeRouter";
dotenv.config();

class App {

    app;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }


    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use("/hello", greetingRouter);
        this.app.use("/", hotelRouter);
        this.app.use("/", hospedeRouter);
        this.app.use("/", reservaHospedeRouter);
    }

    dbConnection(): void {
        AppDataSource.initialize().then(() => {
            console.log("Conexão com BD, sucesso! 🎉🎉")
        }).catch((e) => console.log(e))
     }


}



export default new App().app;