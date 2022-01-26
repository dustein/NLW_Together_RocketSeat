import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import "./database";
import { Request, Response, NextFunction } from "express";
const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({error: err.message})
    } 

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
    //instalar biblioteca express-async-errors
})


app.listen(3030, ()=> console.log("SERVIDOR ativo!"))