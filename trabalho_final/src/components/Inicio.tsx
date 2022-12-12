import { Dispatch, FormEventHandler, SetStateAction } from "react";
import logo from "./img/logoVeiaCopa.png";

export default function ({setRoute}: {setRoute: Dispatch<SetStateAction<string>>}) {

  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { email, password } = ev.currentTarget

    const request = await fetch(`/api/login/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const responseData = await request.json()

    if (request.status >= 200 && request.status <= 299) {
      localStorage.setItem("token", responseData.token)
      alert("PARABAEINZ!")
      setRoute("teste")
      return
    }

    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão ferrado, que eu nem sei o que foi!")
  }
  
  
  return <>
    <form onSubmit={enviarDados}>
      <img src={logo}/>
      <button onClick={() => setRoute("cadastro")}><b>cadastrar</b></button>
      <button onClick={() => setRoute("login")}><b>entrar</b></button>
    </form>
  </>
}