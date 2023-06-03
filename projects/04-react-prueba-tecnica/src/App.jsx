import { useCallback, useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [factError, setFactError] = useState()

    //para recuperar la cita al cargar la pagina
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => {
            if (!res.ok) throw new Error('Error fetching fact')
            return res.json()
            })
        .then(data => {
            const { fact } = data
            setFact(fact)
        })
        .catch((err) => {
            //tanto si hay un error con la respuesta
            //como cuando hay un error en la peticion
        })
    }, [])

    //para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return

        const threeFisrtWords = fact.split(' ').slice(0, 3).join(' ')
        console.log(threeFisrtWords)

        fetch(`https://cataas.com/cat/says/${threeFisrtWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
        })
    }, [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
}
