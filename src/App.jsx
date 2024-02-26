import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImagen from './utils/arrImg.json'

function App() {
  
  const initialValue = getRandomFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialImagen = getRandomFromArray(arrImagen)
  const [imagenSelected, setImagenSelected] = useState(initialImagen)

  const objStyle = {
    backgroundImage: `url("/fondo${imagenSelected}.jpg")`
  }

  return (
    <div className='app' style={objStyle}>
      <h1>Galleta de la fortuna</h1>
      <article className='app_card'> 
      <PhraseCard phraseRandom={phraseRandom} />
      <BtnPhrase 
      setImagenSelected={setImagenSelected}
      setPhraseRandom={setPhraseRandom} />
      </article>
    </div>
  )
}

export default App
