import { Link } from '../Link'

export default function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1552781324120797189/4teiG-tX_400x400.jpg" alt="foto cinlo" />
          <p>Hola! Me llamo CinLo y estoy creando un clon de React Router</p>
        </div>
        <Link to='/'>Ir a la home</Link>
        
      </>
    )
  }