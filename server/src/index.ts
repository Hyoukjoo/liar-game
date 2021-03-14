import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createConnection } from "typeorm";
import "reflect-metadata";

import createSocketIO from "./socket";
import routes from "./routes";

createConnection()
  .then((connection) => {
    console.log("db connection!!!");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

createSocketIO(server);

server.listen(4000, () => {
  console.log("server run!");
});
