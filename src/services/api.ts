import axios from "axios";

export const api = axios.create({
  // Iremos criar uma instancia para setarmos informações padrões das requisições
  baseURL: "http://localhost:3000/api",
});
