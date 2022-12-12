import { Dispatch, FormEventHandler, SetStateAction } from "react";
import player from "./img/player.png"
import players from "./img/players.png"
import arrow from "./img/arrow_right.png"

export default function ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) {
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()

    let player1 = 'nome_player1';
    localStorage.setItem(player1, 'nome1')

    let player2 = 'nome_player2';
    localStorage.setItem(player2, 'nome2')
  }

  
  return <>
    <form onSubmit={enviarDados}>
      <h1>jogadores</h1>
      <div className="container_flex">
        <div className="flex">
          <img className="players" src={player}/>
          <input placeholder="nome player 1" name="player1" className="play_um"></input>
        </div>
        <div className="flex">
          <img className="players" src={players}/>
          <input placeholder="nome player 2" name="player2" className="play_dois"></input>
        </div>
      </div>
      <button onClick={() => setRoute("times")}><img src={arrow}/></button>
    </form>
  </>
}