import Rodape from "./components/Rodape"
import prop from './assets/prop.jpg'
import prop2 from './assets/prop2.jpg'
import iphone13 from './assets/iphone13.jpg';
import galaxyS21 from './assets/galaxy-s21.jpg';
import mi11 from './assets/mi11.jpg';
import pixel6 from './assets/pixel6.jpg';
import oneplus9 from './assets/oneplus9.jpg';
import Propagandas from './components/propagandas';
import Aparelhos from './components/Aparelhos';
import { Aparelho, Propaganda } from './types';

function App() {

  const propagandas: Propaganda[] = [
    { id: 1, imagem: prop },
    { id: 2, imagem: prop2 }
];

  const aparelhos: Aparelho[] = [
    { id: 1, nome: 'iPhone 13', descricao: '128GB, Preto', preco: 4999, imagem: iphone13 },
    { id: 2, nome: 'Samsung Galaxy S21', descricao: '256GB, Branco', preco: 3999, imagem: galaxyS21 },
    { id: 3, nome: 'Xiaomi Mi 11', descricao: '128GB, Azul', preco: 2999, imagem: mi11 },
    { id: 4, nome: 'Google Pixel 6', descricao: '128GB, Preto', preco: 4499, imagem: pixel6 },
    { id: 5, nome: 'OnePlus 9', descricao: '256GB, Verde', preco: 3499, imagem: oneplus9 }
];

  return (
    <>
      <Propagandas propagandas={propagandas} />
      <Aparelhos aparelhos={aparelhos} />
      <Rodape/>
    </>
  )
}

export default App
