import React, {useState, useEffect} from 'react';

const Game = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10))
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [message, setMessage] = useState("")
    const [guess, setGuess] = useState("")
    const [score, setScore] = useState(0)

    const handleClick = () => {
        if (freeAttempt) {
            setFreeAttempt(freeAttempt - 1)
        }
    }
    const handleRestart = () => {
        setFreeAttempt(3)
        setNumber(Math.round(Math.random() * 10))
        setMessage("")
        setGuess("")
    }
    useEffect(() => {
        if (number === +guess) {
            setMessage("You win!")
            setScore(score + 1)
        }
        else if (freeAttempt === 0) {
            setMessage("You lost!")
        }
        setGuess("")
    }, [freeAttempt])

    const handleInput = (e) => {
        setGuess(e.target.value)
    }

    return (
        <div className="row my-5">
            <div className="col-6 offset-3">
                <h1>Guess number from 0 to 10</h1>
                <div className="d-flex">
                    <input type="number" onChange={handleInput} value={guess} className="form-control"/>
                    <button onClick={handleClick} disabled={!guess} className="btn btn-success ms-2">Check</button>
                    <button onClick={handleRestart} className="btn btn-warning ms-2">Restart</button>
                </div>

                {message.length === 0 &&
                <div>У вас осталось {freeAttempt} {freeAttempt === 1 ? "попытка" : "попытки"}</div>
                }
                <div>{message}</div>
                <h3>Ваш счет:{score}</h3>
            </div>

        </div>
    );
};

export default Game;