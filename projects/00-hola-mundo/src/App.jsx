import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    
    return (
        <section className='App'>
            <TwitterFollowCard  
                userName="cinlo02" 
                initialIsFollowing={true}
            >
                <h1>Cintia Lorena Losada</h1>
            </TwitterFollowCard>

            <TwitterFollowCard  
                userName="midudev" 
            >
                <h1>Miguel Angel Duran</h1>
            </TwitterFollowCard>
        </section>
        
    );
}