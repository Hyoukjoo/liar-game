import express from "express";
import http from "http";
import cors from "cors";
import { createConnection } from "typeorm";

import createSocketIO from "./socket";
import { playRouter, roomRouter, userRouter } from "./routes";

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

app.use("/api/users", userRouter);
app.use("/api/plays", playRouter);
app.use("/api/rooms", roomRouter);

createSocketIO(server);

server.listen(4000, () => {
  console.log("server run!");
});
