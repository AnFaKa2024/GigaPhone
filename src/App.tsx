import prop from './assets/prop.jpg'
import prop2 from './assets/prop2.jpg'
import iphone13 from './assets/iphone13.jpg'
import galaxyS21 from './assets/galaxy-s21.jpg'
import mi11 from './assets/mi11.jpg'
import pixel6 from './assets/pixel6.jpg'
import oneplus9 from './assets/oneplus9.jpg'
import whats from './assets/whats.png'
import insta from './assets/insta.jpg'
import face from './assets/facebook.jpg'
import Propagandas from './components/Propagandas'
import Aparelhos from './components/Aparelhos'
import { Aparelho, Propaganda, Rods} from './types'
import Servicos from './components/Servico'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
 
function App() {
  //Antonio Guilherme Araujo Soares
  //Fernanda Budniak de Seda
  //Karen Marques dos Santos

  //Link Repositorio Git: https://github.com/AnFaKa2024/GigaPhone
 
  const propagandas: Propaganda[] = [
    { id: 1, imagem: prop },
    { id: 2, imagem: prop2 }
  ]
 
  const aparelhos: Aparelho[] = [
    { id: 1, nome: 'iPhone 13', descricao: '128GB, Preto', preco: 4999, imagem: iphone13 },
    { id: 2, nome: 'Samsung Galaxy S21', descricao: '256GB, Branco', preco: 3999, imagem: galaxyS21 },
    { id: 3, nome: 'Xiaomi Mi 11', descricao: '128GB, Azul', preco: 2999, imagem: mi11 },
    { id: 4, nome: 'Google Pixel 6', descricao: '128GB, Preto', preco: 4499, imagem: pixel6 },
    { id: 5, nome: 'OnePlus 9', descricao: '256GB, Verde', preco: 3499, imagem: oneplus9 }
  ]


  const servicos = {
    nome1: 'CONSERTO DE TELAS',
    descricao1: 'Realizamos conserto de telas em nossas lojas, a partir de R$80,00',
    nome2: 'DESBLOQUEIO DE CELULAR',
    descricao2: 'Realizamos o desbloqueio de celulares, apenas com a nota fiscal do aparelho, a partir de R$100,00',
    nome3: 'REPARO DE BATERIA',
    descricao3: 'Realizamos a troca de baterias com problemas de duração, a partir de R$150,00',
  };
 
  const rodape: Rods = {
    loja1: 'R. Pedroso de Morais, 1001, Centro, São Paulo',
    loja2: 'R. Vitalício, 876, Jd. Balmoral, São Paulo',
    loja3: 'R. Amaranto Marrom, 21, Jd. Nutrição, Ibiúna',
    loja4: 'R. Água cristalina, 2002, Jd. Fontes, Embú das Artes',
    whats: whats,
    insta: insta,
    face: face
  }

  
 
  return (
    <>
      <Cabecalho />
      <Propagandas propagandas={propagandas} />
      <Aparelhos aparelhos={aparelhos} />
      <Servicos {...servicos} />
      <Rodape {...rodape} />
    </>
  )
}
 
export default App;