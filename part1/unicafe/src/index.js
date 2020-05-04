import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [score, setScore] = useState(0)
  const average = clicks ? score / clicks : '-' 
  const positive = good ? (good / clicks) * 100.0 : '-'

  const handleClick = id => () => {
    setClicks(clicks + 1)

    if (id === 'good') {
        setGood(good + 1)
        setScore(score +1)
      
    } else if (id === 'neutral') {
       setNeutral(neutral +1)
    } else {
      setBad(bad + 1)
      setScore(score -1)
    }
  }
  
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleClick('good')}>good</button>
      <button onClick={handleClick('neutral')}>neutral</button>
      <button onClick={handleClick('bad')}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {clicks}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))