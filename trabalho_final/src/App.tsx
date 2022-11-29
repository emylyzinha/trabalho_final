import { useState } from "react";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Teste from "./components/Teste";
import Update from "./components/Update";
import './App.css';
import Jogadores from "./components/Jogadores";
import Jogo from "./components/Jogo";
import Inicio from "./components/Inicio";
import Times from "./components/Times";
//import './index.css'

export default function () {
  const [route, setRoute] = useState("app")

  return <>
    {route == "app" ? <Inicio setRoute={setRoute} /> : ""}
    {route == "jogadores" ? <Jogadores setRoute={setRoute} /> : ""}
    {route == "times" ? <Times setRoute={setRoute} /> : ""}
    {route == "jogo" ? <Jogo setRoute={setRoute} /> : ""}
    {route == "login" ? <Login setRoute={setRoute} /> : ""}
    {route == "cadastro" ? <Cadastro setRoute={setRoute} /> : ""}
    {route == "teste" ? <Teste setRoute={setRoute}/> : ""}
    {route == "update" ? <Update setRoute={setRoute} /> : ""}
  </>
}