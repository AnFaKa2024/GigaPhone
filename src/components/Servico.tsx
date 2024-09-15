import { ServProps } from "../types";
import tela from "../assets/servico1.jpg"
import desbloqueio from "../assets/servico2.jpg"
import bateria from "../assets/servico3.png"


function Servicos({ nome1, descricao1, nome2, descricao2, nome3, descricao3 }: ServProps) {
    return (
      <div className="container">
        <h1>SERVIÇOS</h1>
        <div>
          <h2>{nome1}</h2>
          <p>{descricao1}</p>
          <img src={tela} alt="Conserto de tela" />
        </div>
        <div>
          <h2>{nome2}</h2>
          <p>{descricao2}</p>
          <img src={desbloqueio} alt="Desbloqueio de celular" />
        </div>
        <div>
          <h2>{nome3}</h2>
          <p>{descricao3}</p>
          <img src={bateria} alt="Conserto de bateria" />
        </div>
      </div>
    );
  }
  
export default Servicos;