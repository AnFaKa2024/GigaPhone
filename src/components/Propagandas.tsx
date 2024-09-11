import { Propaganda } from '../types';

type PropagandasProps = {
    propagandas: Propaganda[];
}

export default function Propagandas({ propagandas }: PropagandasProps) {
    return (
        <section>
            {propagandas.map(prop => (
                <div key={prop.id}>
                    <img src={prop.imagem} alt={`Propaganda ${prop.id}`} />
                </div>
            ))}
        </section>
    );
}
