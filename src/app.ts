import express from "express";
import 'reflect-metadata';
import cors from "cors";
import dotenv from 'dotenv';
import { AppDataSource } from "./data-source";
dotenv.config();

class App {

    app;

    constructor() {
        this.app = express();
        this.routes();
        this.dbConnection();
    }


    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        //this.app.use("/hello", greetingRouter);
    }

    dbConnection(): void {
        AppDataSource.initialize().then(() => {
            console.log("Conexão com BD, sucesso! 🎉🎉")
        }).catch((e) => console.log(e))
     }


}



export default new App().app;