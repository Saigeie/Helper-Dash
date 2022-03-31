import { Request, Response } from "express";
interface RunOptions {
  (req: Request, res: Response);
}


export type RouteType = {
    name: string;
  run: RunOptions;
}