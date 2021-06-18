import InfoModal from '../Components/infoModal.component';
import ActiveUser from '../Components/ActiveUser.component';
import Game from '../Components/GameModal.component';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Index() {
    var selectedMembers = [];
    const membersToSelect = ["Carl-bot", "Zira"];
    const [members, setMembers] = useState([{}]);
    const [showGame, setShowGame] = useState(false);

    async function GetServerData() {
        let rawData = await fetch('https://discord.com/api/guilds/800887995385249812/widget.json');
        return await rawData.json();
    }
  
  useEffect(() => {
    GetServerData().then(data => setMembers(data.members))
  }, [])

  function OnMemberClick_Handle(e) {
    if (membersToSelect.find(member => member === e.target.innerText) && !selectedMembers.find(member => member === e.target.innerText)) {
      selectedMembers.push(e.target.innerText);
      if (selectedMembers.length === membersToSelect.length) setShowGame(true); 
    }
  }

  const IsBot = (member) => member.username && member.username[0] === '!';

    return (
        <div className="Index">
            {
                !showGame ?
                  <>
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
                      {members.map(member => !IsBot(member) && <ActiveUser key={member.id} onClick={OnMemberClick_Handle} avatar={member.avatar_url} name={member.username} status={member.status} />)}
                  </InfoModal>
    
                  <InfoModal title="Nossos Bots" >
                    {members.map(member => IsBot(member) && <ActiveUser key={member.id} avatar={member.avatar_url} name={member.username} status={member.status} />)} 
                  </InfoModal>
                  </>
                :
                <Game />
              }
        </div>
    )
}