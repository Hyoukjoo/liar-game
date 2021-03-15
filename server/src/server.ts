import http from "http";
import { Express } from "express";
import { Connection, createConnection } from "typeorm";
import "reflect-metadata";

import app from "./app";
import createSocketIO from "./socket";

class Server {
  private server: http.Server;
  private db: Connection;

  constructor(app: Express) {
    this.server = http.createServer(app);
    this.run.bind(this);
    this.stop.bind(this);
  }

  run() {
    createConnection()
      .then((connection) => {
        this.db = connection;
        console.log("db connection!!!");

        createSocketIO(this.server);

        this.server.listen(4000, () => {
          console.log("server run!");
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  stop() {
    this.server.close((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("server stop");

        this.db.close().then(() => {
          console.log("db close");
        });
      }
    });
  }
}

const server = new Server(app);

server.run();

export default server;
