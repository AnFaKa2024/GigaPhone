import { Aparelho } from '../types';

type AparelhosProps = {
    aparelhos: Aparelho[];
}

export default function Aparelhos({ aparelhos }: AparelhosProps) {
    return (
        <section className="aparelhos">
            {aparelhos.map(aparelho => (
                <div key={aparelho.id} className="aparelho-card">
                    <img src={aparelho.imagem} alt={aparelho.nome} width="150" />
                    <h3>{aparelho.nome}</h3>
                    <p>{aparelho.descricao}</p>
                    <p>Preço: R$ {aparelho.preco.toFixed(2)}</p>
                </div>
            ))}
        </section>
    );
}
