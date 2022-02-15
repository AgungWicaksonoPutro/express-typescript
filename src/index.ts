import express, {Application} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import UserRoutes from "./routers/UserRoutes";
import {config as dotenv} from "dotenv";

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.use("/api/v1/users", UserRoutes);
    }
}

const app = new App().app;

const port: any = process.env.PORT || 3000;

app.listen(port, (): void =>{
    console.log(`Server running on port ${port}`);
})