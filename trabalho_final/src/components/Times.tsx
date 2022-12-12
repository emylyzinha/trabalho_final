import { ChangeEvent, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from "react";
import brasil from "./img/bandeira_brasil.png"
import mexico from "./img/bandeira_mexico.png"
import argentina from "./img/bandeira_argentina.png"
import franca from "./img/bandeira_franca.png"
import holanda from "./img/bandeira_holanda.png"
import inglaterra from "./img/bandeira_inglaterra.png"
import marrocos from "./img/bandeira_marrocos.png"
import portugal from "./img/bandeira_portugal.png"

export default function ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) {

  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { _name, email, password } = ev.currentTarget

    const request = await fetch(`/api/user/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: _name.value,
        email: email.value,
        password: password.value
      })
    })

    if (request.status >= 200 && request.status <= 299) {
      alert("PARABAEINZ!")
      setRoute("login")
      return
    }

    const responseData = await request.json()
    
    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }

  return <>
    <form onSubmit={enviarDados}>
      <h1>times</h1>
      <div className="container_flex fundo">
        <div className="flex">
          <h2>player 1: </h2>
          <img className="bandeiras" src={brasil}/>
          <select>
            <option>Brasil</option>
          </select>
        </div>
        <div className="flex">
          <h2>player 2: </h2>
          <img className="bandeiras" id='bandeiraVersus' src={argentina}/>
          <select className="selecionaPais">
            <option value="argentina">Argentina</option>
            <option value="franca">França</option>
            <option value="holanda">Holanda</option>
            <option value="inglaterra">Inglaterra</option>
            <option value="marrocos">Marrocos</option>
            <option value="mexico">México</option>
            <option value="portugal">Portugal</option>
          </select>
        </div>
      </div>
      <button onClick={() => setRoute("jogo")}><b>jogar</b></button>
    </form>
  </>
}