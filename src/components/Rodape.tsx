import { FooterRod } from '../styled';
import { Rods } from '../types';
 

 
export default function Rodape({ loja1, loja2, loja3, loja4, whats, insta, face }: Rods) {
  
  return (
    <>
      <FooterRod>
        <h3>VISITE NOSSAS LOJAS</h3>
        <p>Endereços</p>
        <ul>
          <li>{loja1}</li>
          <li>{loja2}</li>
          <li>{loja3}</li>
          <li>{loja4}</li>
        </ul>
        <br />
        <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
        <img src={whats} alt="WhatsApp" />
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
      </FooterRod>
    </>
  );
}