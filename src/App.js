import { useEffect, useState } from 'react'
import './App.css';
import InfoModal from './Components/infoModal.component';
import ActiveUser from './Components/ActiveUser.component';

export default function App() {
  const [members, setMembers] = useState([{}]);

  async function GetServerData() {
    let rawData = await fetch('https://discord.com/api/guilds/800887995385249812/widget.json');
    return await rawData.json();
  }
  
  useEffect(() => GetServerData().then(data => setMembers(data.members)), [])

  return (
    <div className="App">
      <header>
        <h1>Hamburgueria 🍔</h1>
      </header>
      <main>
        <InfoModal 
          id="presentation" 
          title="Quem somos" 
          content={<p>Somos uma comunidade de doidos apaixonados por diferentes tipos Hamburguers, Memes e por coisas consideradas "CRINGE".</p>} 
          />
        
        <InfoModal 
          id="join" 
          title="Junte-se a nós" 
          content={(
            <>
            <p>Juntando-se a nós você ira conhecer diferentes tipos de doidos, memes algumas vezes engraçados e outras vezes estranhos e scripts gratuitos para flodar seus amigos no Zap Zap ou sair de alguma aula EAD chata.</p>
            <button className="joinBtn"><a href="https://discord.gg/E5rsKRgH">Entrar</a></button>
            </>
          )} />

        <InfoModal 
          id="activeMenbers" 
          modalId="modalActiveMembers" 
          title="Membros ativos" 
          content={members.map(member => <ActiveUser id={member.id} avatar={member.avatar_url} name={member.username} status={member.status} />)} 
          />

        <InfoModal 
          title="Nossos Bots" 
          content={members.map(member => member.username && member.username[0] == '!' && <ActiveUser id={member.id} avatar={member.avatar_url} name={member.username} status={member.status} />)} 
          />
      </main>
      <footer>
          <h3>Site desenvolvido por Coffee-Developer</h3>
      </footer>
    </div>
  );
}