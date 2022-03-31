import { Request } from "express";
import { Response } from "express-serve-static-core";
import glob from "glob";
import { promisify } from "util";
import { RouteType } from "../types/RouteTypes";
const globPromise = promisify(glob);

export async function importFile(filePath: string) {
  return (await import(filePath))?.default;
}

// Route Handler
export  async function RouteHandler(app) {
  const Files = await globPromise(`${process.cwd()}/src/Routes/**/*.ts`);
  Files.map(async (x) => {
    const file: RouteType = await importFile(x);
    if (!file) return;
    app.get(
      `${file.name.startsWith("/") ? `${file.name}` : `/${file.name}`}`,
      (req: Request, res: Response) => {
        file.run(req, res);
      }
    );
  });
}

