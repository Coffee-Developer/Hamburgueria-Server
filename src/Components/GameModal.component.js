import InfoModal from './infoModal.component'
import { useEffect, useState } from 'react'

export default function Game() {
    const Words = ["X-Tudo", "X-Picanha", "X-Costela", "X-Bacon", "X-Salada", "X-Burguer", "X-Ratão", "X-Cheddar"]
    const [result, setResult] = useState("");
    const [isGameActive, setIsGameActive] = useState(true);
    const [generatedWord, setGeneratedWord] = useState("");
    const [errorsCount, setErrorsCount] = useState(0);
    const [errorsMax, setErrorsMax] = useState(0);
    const [hitsCount, setHitsCount] = useState(0);
    const [inputsToDisplay, setInputsToDisplay] = useState([]);
    const [hintBtnPressed, setHintBtnPressed] = useState(false);
    const [wins, setWins] = useState(localStorage.getItem("Wins") != null ? parseInt(localStorage.getItem("Wins")) : 0);
    const [loses, setLoses] = useState(localStorage.getItem("Loses") != null ? parseInt(localStorage.getItem("Loses")) : 0);

    function CheckHandle() {
        for (const input of document.getElementsByClassName('charInputs')) {
            if (!input.readOnly && input.value === generatedWord[input.getAttribute("char")]) {
                SetCorrectByIndex(input.getAttribute("char"))
            } else if (input.value !== generatedWord[input.getAttribute("char")] && input.value !== "") {
                setErrorsCount(prevCount => prevCount + 1)
            }
        }       
    }

    function HintHandle() {
        if (!hintBtnPressed) {
            SetCorrectByIndex(0, generatedWord.length - 1);
            setHintBtnPressed(true);
        }
    }

    function NewGameHandle() {
        setIsGameActive(true);
        setErrorsCount(0);
        setHitsCount(0);
        setHintBtnPressed(false);
    }

    function SetCorrectByIndex(...index) {
        const inputs = document.getElementsByClassName('charInputs');
        index.forEach(index => {
            inputs[index].value = generatedWord[index];
            inputs[index].readOnly = true;
            setHitsCount(prevCount => prevCount + 1)
        })
    }

    useEffect(() => {
        if (errorsMax === 0 || generatedWord.length === 0)  return;

        if (errorsCount >= errorsMax) {
            setLoses(prevLoses => {
                localStorage.setItem("Loses", prevLoses + 1)
                return prevLoses + 1
            })
            setResult(`Você perdeu !, a palavra era ${generatedWord}`)
            setIsGameActive(false);
        }

        if (hitsCount >= generatedWord.length) {
            setWins(prevWins => {
                localStorage.setItem("Wins", prevWins + 1)
                return prevWins + 1
            })
            setResult(`Você venceu !, a palavra era ${generatedWord}`)
            setIsGameActive(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hitsCount, errorsCount]) 

    useEffect(() => {
        if (!isGameActive) return;

        var Word = Words[Math.floor(Math.random() * Words.length)];
        var inputs = [];
        for (let i = 0; i < Word.length; i++) inputs.push(<input key={i} char={i} className="charInputs" type="text" />);
        setGeneratedWord(Word);
        setErrorsMax(Word.length + 1);
        setInputsToDisplay(inputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGameActive])

    return (
        <InfoModal title="Jogo da forca">
                {isGameActive ?
                <>
                    <div>
                        <h3 style={{padding: '5px', margin: '0', display: 'inline-block'}}>Vitórias: {wins}</h3>
                        <h3 style={{padding: '5px', margin: '0', display: 'inline-block'}}>Derrotas: {loses}</h3>
                    </div>
                    <p>Erros: {errorsCount} de {errorsMax}</p>
                    <p>Acertos: {hitsCount}</p>
                    <div>{inputsToDisplay}</div>
                    <button className="btn" onClick={CheckHandle}>Checar</button>
                    <button className="btn" onClick={HintHandle}>Dica</button>
                </>
                :
                <>
                    <h2>{result}</h2>
                    <button className="btn" onClick={NewGameHandle}>Novo jogo</button>
                </>
                }
        </InfoModal>
    )
}