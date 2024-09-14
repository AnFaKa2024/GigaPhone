export type RodProps ={ 
  loja1: 'R. Pedroso de Morais, 1001, Centro, São Paulo';
  loja2: 'R. Vitalício, 876, Jd. Balmoral, São Paulo';
  loja3: 'R. Amaranto Marrom, 21, Jd. Nutrição, Ibiúna';
  loja4: 'R. Água cristalina, 2002, Jd. Fontes, Embú das Artes';
  


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

export type Servico = {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export type ServicoProps = {
  nome1: "CONSERTO DE TELAS"
  descricao1:"Realizamos conserto de telas em nossas lojas, a partir de R$80,00"

  nome2: "DESBLOQUEIO DE CELULAR"
  descricao2:"Realizamos o desbloqueio de celulares, apenas com a nota fiscal do aparelho, a partir de R$100,00"

  nome3: "REPARO DE BARERIA"
  descricao3:"Realizamos a troca de baterias com problemas de duração, a partir de R$150,00"
}

