import { useState, useEffect } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
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

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
