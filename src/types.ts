export type Rods ={ 
  loja1: string;
  loja2: string;
  loja3: string;
  loja4: string;  
  whats: string;     
  insta: string;      
  face: string;


}

export type Propaganda = {
  id: number;
  imagem: string;
}

export type Aparelho = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;

}


export type ServProps = {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
 
  nome1: "CONSERTO DE TELAS"
  descricao1:"Realizamos conserto de telas em nossas lojas, a partir de R$80,00"

  nome2: "DESBLOQUEIO DE CELULAR"
  descricao2:"Realizamos o desbloqueio de celulares, apenas com a nota fiscal do aparelho, a partir de R$100,00"

  nome3: "REPARO DE BARERIA"
  descricao3:"Realizamos a troca de baterias com problemas de duração, a partir de R$150,00"
}

