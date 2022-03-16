import React from "react";
import ReactDOM from "react-dom";

import { createServer, Model } from "miragejs";

import { App } from "./App";

createServer({
  models: {
    //Banco de dados do miragejs
    transaction: Model,
  },

  routes() {
    this.namespace = "api"; // Quando fizermos uma chamada api ele vai direcionar para o miragejs

    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody); //Transformando a resposta em json

      return schema.create("transaction", data); //schema é o banco de dados
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
