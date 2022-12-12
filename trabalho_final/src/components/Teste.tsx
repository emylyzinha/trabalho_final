import { Dispatch, MouseEventHandler, useState, SetStateAction } from "react"

export default function ({setRoute}: {setRoute: Dispatch<SetStateAction<string>>}) {
  const [name, setName] = useState("___")
  const [email, setEmail] = useState("___")

  const buscarDados: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json()
      setName(user.name)
      setEmail(user.email)
      return
    }

    alert("Você não está logado!")
  }

  const alteraDados: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json()
      setName(user.name)
      setEmail(user.email)
      setRoute("update")
      console.log("okay")
      console.log(user.name)
      console.log(user.email)
      return
    }

    alert("Você não está logado!")
  }

  const logOff: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      localStorage.removeItem('token')
      alert("você saiu da conta")
      setRoute("login")
      return
    }
    alert("Você não está logado!")
    setRoute("login")
  }

  return <>
    <h1>o player "1" ganhou</h1>
    <div className="container-teste">
      <div>
        <label><h3>nome: </h3></label><b>{name}</b>
      </div>
      <div>
        <label><h3>email: </h3></label><b>{email}</b>
      </div>
    </div>
    <div className = "btn-teste">
      <button onClick={buscarDados}><b>buscar</b></button>
      <button onClick={logOff}><b>sair</b></button>
    </div>
  </>
}