import express from "express";
import http from "http";
import cors from "cors";
import { createConnection } from "typeorm";
import "reflect-metadata";

import createSocketIO from "./socket";
import router from "./routes";

createConnection()
  .then((connection) => {
    console.log("db connection!!!");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", router);

createSocketIO(server);

server.listen(4000, () => {
  console.log("server run!");
});
