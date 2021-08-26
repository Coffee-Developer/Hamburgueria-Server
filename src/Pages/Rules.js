import InfoModal from '../Components/infoModal.component';

export default function Rules() {
    return (
        <div className="Rules">
            <InfoModal title="Leia as regras antes de entrar" > 
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
              <a href="https://discord.gg/jQGyK9D386"><button className="joinBtn">Quero entrar logo</button></a>
            </InfoModal>
        </div>
    )
}
