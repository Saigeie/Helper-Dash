require("dotenv").config();
import express from "express";
import { RouteHandler } from "./modules/RouteHandler";
import Mongo from "./modules/database/connect";
import bodyParser from "body-parser";
const app = express();

RouteHandler(app);
Mongo()

// app.use(rateLimiter);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("json spaces", 1);

app.listen(process.env.PORT || 80, async () => {
  console.log(`Connected to server, port: ${process.env.PORT || 80}`);
})
