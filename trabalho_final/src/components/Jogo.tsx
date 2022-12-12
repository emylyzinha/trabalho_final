import { Dispatch, SetStateAction } from "react"
import lutoVeia from "./img/lutoDaVeia.png"

export default function ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) {

  return <>
      <img className="veiaTriste" src={lutoVeia}/>
      <button className="buttonVoltar" onClick={() => setRoute("app")}>voltar</button>
  </>
}

