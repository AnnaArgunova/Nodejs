import express, { Express, Request, Response } from "express";
import {logger} from "@utils/logger";

export const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    console.log(logger());
    res.send("Server starting");
});

app.get("/test", (req: Request, res: Response) => {
    console.log(logger());
    res.json({ test: "test" });
});
