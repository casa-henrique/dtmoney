import React from "react";
import ReactDOM from "react-dom";

import { createServer, Model } from "miragejs";

import { App } from "./App";

createServer({
  models: {
    //Banco de dados do miragejs
    transaction: Model,
  },

  seeds(server) {
    //Formato para começarmos a aplicação com dados ficticios no banco de dados

    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Title Teste",
          type: "deposit",
          category: "test",
          amount: 500,
          createdAt: new Date("2021-03-15 16:00:00"),
        },
        {
          id: 2,
          title: "Title 2",
          type: "withdraw",
          category: "test",
          amount: 200,
          createdAt: new Date("2021-03-14 12:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api"; // Quando fizermos uma chamada api ele vai direcionar para o miragejs

    this.get("/transactions", () => {
      return this.schema.all("transaction");
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
