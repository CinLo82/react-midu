import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'cinlo',
        name: 'Cintia Lorena Losada',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'zompo',
        name: 'Alejandro Peiro',
        isFollowing: true
    },
    {
        userName: 'kichan',
        name: 'Cristian Bottaro',
        isFollowing: false
    },

]

export function App() {

    
    return (
        <section className='App'>
          {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard
                    userName={userName}
                    key={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            })
          }
        </section>
        
    );
}