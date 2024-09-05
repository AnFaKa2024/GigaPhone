
import face from './assets/facebook.jpg'
import insta from './assets/logo insta.jpg'
import whats from './assets/logo-whatsapp.png'

export default function Rodape(props:RodProps){

return(
  <FooterRod>
       <h3> PARA DÚVIDAS ENTRE EM CONTATO </h3>
      <p> Estamos a disposição pelo Whatsapp <img src={whats} alt="logo-whatsapp" /></p>
      <p> Siga-nos e acompanhe as novidades e tendências
        <img src={insta} alt="logo insta" /> 
        <img src={face} alt="facebook" /> 
      </p>

      <ul>
        <li>Loja 1 - {props.loja1}</li>
        <li>Loja 2 - {props.loja2}</li>
        <li>Loja 3 - {props.loja3}</li>
        <li>Loja 4 - {props.loja4}</li>
      </ul>
  </FooterRod>
)


}