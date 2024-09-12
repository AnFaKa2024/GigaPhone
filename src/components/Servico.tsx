import tela from "./img/servico1.jpg"
import desbloqueio from "./img/servico2.jpg"
import bateria from "./img/servico3.jpg"


function Servicos(){
    return(
        <>
        
        <h1>SERVIÇOS</h1>
        <div>
            <h2>CONSERTO DE TELAS</h2>
            <p>Realizamos conserto de telas em nossas lojas, a partir de R$80,00</p>
            <img src={tela} alt="Conserto de tela" />

        </div>
        <div>
            <h2>DESBLOQUEIO DE CELULAR</h2>
            <p>Realizamos o desbloqueio de celulares, apenas com a nota fiscal do aparelho, a partir de R$100,00</p>
            <img src={desbloqueio} alt="Desbloqueio de celular" />
        </div>
        <div>
            <h2>REPARO DE BARERIA</h2>
            <p>Realizamos a troca de baterias com problemas de duração, a partir de R$150,00</p>
            <img src={bateria} alt="Conserto de bateria" />
        </div>
        
        
        </>


      


    )
}
export default Servicos;