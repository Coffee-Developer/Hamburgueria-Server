import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import InfoModal from './Components/infoModal.component';
import ActiveUser from './Components/ActiveUser.component';

export default function App() {
  const [members, setMembers] = useState([{}]);

  async function GetServerData() {
    let rawData = await fetch('https://discord.com/api/guilds/800887995385249812/widget.json');
    return await rawData.json();
  }
  
  useEffect(() => {
    GetServerData().then(data => setMembers(data.members))
  }, [])

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Servidor Hamburgueria 🍔</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <InfoModal id="presentation" title="Quem somos" >
                  {<p>Somos uma comunidade de doidos apaixonados por diferentes tipos Hamburguers, Memes e por coisas consideradas "CRINGE".</p>} 
              </InfoModal>
              
              <InfoModal id="join" title="Junte-se a nós" >
                {(
                  <>
                  <p>Juntando-se a nós você ira conhecer diferentes tipos de doidos, memes algumas vezes engraçados e outras vezes estranhos e scripts gratuitos para flodar seus amigos no Zap Zap ou sair de alguma aula EAD chata.</p>
                  <Link to="/Rules"><button className="joinBtn">Entrar</button></Link>
                  </>
                )}
              </InfoModal>

              <InfoModal id="activeMenbers" modalId="modalActiveMembers" title="Membros ativos" >
                  {members.map(member => member.username && member.username[0] !== '!' && <ActiveUser id={member.id} avatar={member.avatar_url} name={member.username} status={member.status} />)}
              </InfoModal>

              <InfoModal title="Nossos Bots" >
                  {members.map(member => member.username && member.username[0] === '!' && <ActiveUser id={member.id} avatar={member.avatar_url} name={member.username} status={member.status} />)} 
              </InfoModal>
            </Route>

            <Route path="/Rules">
              <InfoModal title="Leia as regras antes de entrar" > 
                {(
                    <>
                    <ul style={{textAlign: 'left'}}>
                      <li>
                        <h3>Principal</h3>
                        <ol>
                          <li>Quem pegar qualquer informação da vida pessoal de um player e trazer para dentro do Discord sem o consentimento do mesmo será banido do servidor sem direito a pagar o desban, (Ban permanente)! Proibido qualquer tipo de ofensa a outras pessoas. </li>
                          <li>É proibido floodar  qualquer tipo de mensagens.</li>
                          <li>Proibido abusar dos comandos do bot.</li>
                          <li>Proibido se aproveitar de qualquer bug no Discord.</li>
                        </ol>
                      </li>
                      <li>
                        <h3>Outras</h3>
                        <ol>
                          <li>Proibido divulgar qualquer link ou conteúdo que não seja autorizado pela staff.</li>
                          <li>É extremamente proibido a divulgação de qualquer conteúdo pornográfico ou malicioso.</li>
                          <li>Proibido compartilhar noticias falsas.</li>
                          <li>Proibido negociar armas, veículos ou qualquer  coisa que seja de dentro do RP, sempre que quiser vender algo, deixe seu telefone in-game para resolverem no RP.</li>
                          <li>Proibido ofender com reações.</li>
                          <li>É proibido divulgar outro servidor.</li>
                          <li>Proibido compartilhar qualquer tipo de conteúdo adulto.</li>
                        </ol>
                      </li>
                    </ul>
                    <a href="https://discord.gg/E5rsKRgH"><button className="joinBtn">Quero entrar logo</button></a>
                    </>
                )} 
              </InfoModal>
            </Route>
          </Switch>
        </main>
        <Route exact path="/">
          <footer>
              <h3>Site desenvolvido por Coffee-Developer</h3>
          </footer>
        </Route>
      </div>
    </Router>
  );
}