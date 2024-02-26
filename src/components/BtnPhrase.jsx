import React from 'react'
import getRandomFromArray from '../utils/getRandomFromArray'
import phrases from '../utils/phrases.json'
import arrImagen from '../utils/arrImg.json'

const BtnPhrase = ({ setPhraseRandom, setImagenSelected }) => {

    const handleClick = () => {
        const phrase = getRandomFromArray(phrases)
        setPhraseRandom(phrase)

        const background = getRandomFromArray(arrImagen)
        setImagenSelected(background)
    }

    return (
        <button className='card_btn' onClick={handleClick}>prueba tu suerte</button>
    )
}

export default BtnPhrase