import { Dispatch, FormEventHandler, SetStateAction } from "react";

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
      <h1>vez de </h1>
      <div className="container_jogo">
          <div className="colunas_casa">
              <div className="casa a">a</div>
              <div className="casa b">b</div>
              <div className="casa c">c</div>
          </div>
          <div className="colunas_casa">
              <div className="casa d">d</div>
              <div className="casa e">e</div>
              <div className="casa f">f</div>
          </div>
          <div className="colunas_casa">
              <div className="casa g">g</div>
              <div className="casa h">h</div>
              <div className="casa i">i</div>
          </div>
      </div>
      <button onClick={() => setRoute("teste")}><b>ok</b></button>
    </form>
  </>
}