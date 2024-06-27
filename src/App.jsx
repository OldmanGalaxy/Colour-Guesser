import { useState } from 'react'

function generateRandomColour() {
  return Math.random().toString(16).substr(-6);
}

function selector(colour1, colour2, colour3) {
  let temp = Math.floor(Math.random() * 3);
  if (temp === 0)
    return colour1;
  else if (temp === 1)
    return colour2;
  return colour3;
}

function App() {
  const [colour1, setColour1] = useState(generateRandomColour());
  const [colour2, setColour2] = useState(generateRandomColour());
  const [colour3, setColour3] = useState(generateRandomColour());
  const [score, setScore] = useState(0);
  let colour = selector(colour1, colour2, colour3);

  function checkAnswer1() {
    if (colour === colour1)
      setScore(score + 1);
    setColour1(generateRandomColour());
    setColour2(generateRandomColour());
    setColour3(generateRandomColour());
    colour = selector(colour1, colour2, colour3);
  }

  function checkAnswer2() {
    if (colour === colour2)
      setScore(score + 1);
    setColour1(generateRandomColour());
    setColour2(generateRandomColour());
    setColour3(generateRandomColour());
    colour = selector(colour1, colour2, colour3);
  }

  function checkAnswer3() {
    if (colour === colour3)
      setScore(score + 1);
    setColour1(generateRandomColour());
    setColour2(generateRandomColour());
    setColour3(generateRandomColour());
    colour = selector(colour1, colour2, colour3);
  }

  return (
    <>
      <div className='colour-container'>
        <div className='colour-display' style={{backgroundColor: "#" + colour}}></div>
      </div>
      <div className='buttons-container'>
        <div className='buttons'>
          <button onClick={checkAnswer1}>#{colour1}</button>
          <button onClick={checkAnswer2}>#{colour2}</button>
          <button onClick={checkAnswer3}>#{colour3}</button>
        </div>
      </div>
      <div className='score-container'>
        <div className='score-display'>
          Score: {score}
        </div>
      </div>
    </>
  )
}

export default App
