import tela from "./img/servico1.jpg"
import desbloqueio from "./img/servico2.jpg"
import bateria from "./img/servico3.jpg"


function Servicos(props:ServicosProps){
    return(
        <>
        
        <h1>SERVIÇOS</h1>
        <div>
            <h2>{props.nome1}</h2>
            <p>{props.descricao1}</p>
            <img src={tela} alt="Conserto de tela" />

        </div>
        <div>
            <h2>{props.nome2}</h2>
            <p>{props.descricao2}</p>
            <img src={desbloqueio} alt="Desbloqueio de celular" />
        </div>
        <div>
            <h2>{props.nome3}</h2>
            <p>{props.descricao3}</p>
            <img src={bateria} alt="Conserto de bateria" />
        </div>
        
        
        </>


      


    )
}
export default Servicos;