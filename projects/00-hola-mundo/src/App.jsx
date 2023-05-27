import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const [name, setName] = useState('cinlo');

    console.log('render with name', name);
    
    return (
        <section className='App'>
            <TwitterFollowCard  
                userName={name} 
            >
                <h1>Cinlo Losada</h1>
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                userName="jsdad" 
            >
                <h1>Nicanol Rios</h1>
            </TwitterFollowCard>
            <TwitterFollowCard  
                userName="zompo" 
            >
                <h1>Zompolopote</h1>
            </TwitterFollowCard>
            <TwitterFollowCard  
                userName="guille" 
            >
                <h1>Guillermo Julian</h1>
            </TwitterFollowCard>

            <button onClick={() => setName('Pedromichel')}>
                Cambio nombre
            </button>

        </section>
        
    );
}