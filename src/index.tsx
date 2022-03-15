import React from "react";
import ReactDOM from "react-dom";

import { createServer } from "miragejs";

import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api"; // Quando fizermos uma chamada api ele vai direcionar para o miragejs

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          CreatedAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
