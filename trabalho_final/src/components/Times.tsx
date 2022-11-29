import { Dispatch, FormEventHandler, SetStateAction } from "react";
import brasil from "./img/bandeira_brasil.png"
import mexico from "./img/bandeira_mexico.png"

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
          <h2>player 1</h2>
          <img className="bandeiras" src={brasil}/>
        </div>
        <div className="flex">
          <h2>player 2</h2>
          <img className="bandeiras" src={mexico}/>
        </div>
      </div>
      <button onClick={() => setRoute("jogo")}><b>jogar</b></button>
    </form>
  </>
}