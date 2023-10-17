import { useEffect, useState } from "react"

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat act whatever')

  useEffect(() => {
    fetch('https://catfatc.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])
  return (
    <main>
      <h1>App de Gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
