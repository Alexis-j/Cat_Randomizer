import { useEffect, useState } from "react";
import './app.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/';

export function App() {
  const [fact, setFact] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstthreeWords = fact.split(' ').slice(0, 3).join(' ');

        fetch(`https://cataas.com/cat/says/${firstthreeWords}?size=50&color=red&json=true`)
          .then((res) => res.json())
          .then((response) => {
            const { _id } = firstthreeWords;
            // Construir la URL de la imagen correctamente
            const imageUrl = `https://cataas.com/cat/says/${firstthreeWords }`;

            setImageUrl(imageUrl);
          })
      });
  }, []);

  return (
    <main>
      <div className="card">
        <h1 class="title">App de Gatitos</h1>
        <section>
          <div className="echo">
          {fact && <p>{fact}</p>}
          </div>
          {imageUrl && (
            <img
              src={imageUrl} // Utiliza la URL de la imagen directamente aquí
              alt={`Image extracted using the first three words from ${fact}`}
            />
          )}
        </section>
      </div>
    </main>
  );
}
