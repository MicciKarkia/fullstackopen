import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick(text)}>{text}</button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    text === 'positive' ? (
      <div>
        <p>{text} {value} %</p>
      </div>
    ) : (
        <div>
          <p>{text} {value}</p>
        </div>
    )
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive, feedback }) => {
  return (
    <div>
      <h1>statistics</h1>
      {feedback ? (
        <div>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
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

  const handleFeedback = id => () => {
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
      <Button handleClick={handleFeedback} text='good' />
      <Button handleClick={handleFeedback} text='neutral' />
      <Button handleClick={handleFeedback} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={clicks} average={average} positive={positive} feedback={feedback} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))