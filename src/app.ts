import express, { Express, Request, Response } from "express";
import {logger} from "@utils/logger";
import cors from 'cors';

export const app: Express = express();

const corsOptions = {
    origin: ['http://localhost:3000', 'https://blog-nextjs-nine-sigma.vercel.app'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
    console.log(logger());
    res.send("Server starting");
});

app.get("/test", (req: Request, res: Response) => {
    console.log(logger());
    res.json({ test: "test" });
});
