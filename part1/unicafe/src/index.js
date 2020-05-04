import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad, all, average, positive, feedback }) => {
  return (
    <div>
      <h1>statistics</h1>
      {feedback ? (
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positive} %</p>
        </div>
      ) : (
        <p>No feedback given</p> 
      )}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState(false)
  const average = clicks ? score / clicks : '-' 
  const positive = good ? (good / clicks) * 100.0 : '-'

  const handleClick = id => () => {
    setClicks(clicks + 1)
    setFeedback(true)

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
      <Statistics good={good} neutral={neutral} bad={bad} all={clicks} average={average} positive={positive} feedback={feedback} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))