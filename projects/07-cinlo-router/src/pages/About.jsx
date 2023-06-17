import { Link } from '../Link'
import { Route } from '../Route'

const i18n = {
    es:{
        title: 'Sobre nosotros',
        description: 'Hola! Me llamo CinLo y estoy creando un clon de React Router.',
        button: 'Ir a la home'
        },
    en: {
        title: 'About us',
        description: 'Hi! my name is Cinlo and I am creating a clone of React Router.',
        button: 'Go to home page'
    }
    
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams}) {
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1552781324120797189/4teiG-tX_400x400.jpg" alt="foto cinlo" />
          <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.button}</Link>
        
      </>
    )
  }