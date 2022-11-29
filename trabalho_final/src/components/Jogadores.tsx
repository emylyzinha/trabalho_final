import { Dispatch, FormEventHandler, SetStateAction } from "react";
import player from "./img/player.png"
import players from "./img/players.png"
import arrow from "./img/arrow_right.png"

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
      <h1>jogadores</h1>
      <div className="container_flex">
        <div className="flex">
          <img className="players" src={player}/>
          <input placeholder="nome player 1"></input>
        </div>
        <div className="flex">
          <img className="players" src={players}/>
          <input placeholder="nome player 2"></input>
        </div>
      </div>
      <button onClick={() => setRoute("times")}><img src={arrow}/></button>
    </form>
  </>
}