import { text } from "express";
import React from "react";
import { Dispatch, FormEventHandler, useState, SetStateAction,  } from "react";

export default function ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) {
    const [_name, setName] = useState("___")
    const [email, setEmail] = useState("___")

    console.log(_name)
    console.log(email)

    const alterarDados: FormEventHandler<HTMLFormElement> = async ev => {
        
        ev.preventDefault()
        const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

        if (request.status >= 200 && request.status <= 299) {
            const user = await request.json()
            setRoute("update")
            console.log("pegar valor anterior ")
            console.log(document.getElementsByName('_name').values)
            console.log(user.email)

            return
        }


    }

    const mostrarDados: React.MouseEventHandler<HTMLButtonElement> = async ev => {

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

        return
        /*
        const tokens = await fetch(`/api/logged/${localStorage.getItem('token')}`)
        ev.preventDefault()
        const { _name, email, password } = ev.target as HTMLFormElement

        if (token.status >= 200 && token.status <= 299) {
            console.log("help")            
            console.log("tá indo")
            const request = await fetch(`/api/user/update`, {
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
            setRoute("teste")
            return
            }
        
            const responseData = await request.json()
            
            if (responseData.error) {
            alert(responseData.error)
            return
            }
        
            alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
            return
        }
        */
    }

    return <>
        <form onSubmit={alterarDados}>
            <h1>slterar dados</h1>
            <input name="_name" value={_name}/>
            <input name="email" value={email}/>
            <input name="password" type="password" placeholder="senha" />
            <button onClick={mostrarDados}><b>preencher</b></button>
            <button onClick={() => setRoute("teste")}><b>voltar</b></button>
            <button><b>alterar</b></button>
        </form>
    </>
}