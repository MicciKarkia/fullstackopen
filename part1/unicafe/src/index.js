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
      
        <td>{text} {value} %</td>
      
    ) : (
        
          <td>{text} {value}</td>
        
    )
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive, feedback }) => {
  return (
    <div>
    <table>
        <thead style={{ columnSpan: 'all' }}>
          <tr>
            <td><h1>statistics</h1></td>
          </tr></thead>
      
        {feedback ? (
        <tbody>
        <tr><Statistic text="good" value={good} /></tr>
        <tr><Statistic text="neutral" value={neutral} /></tr>
        <tr><Statistic text="bad" value={bad} /></tr>
        <tr><Statistic text="all" value={all} /></tr>
        <tr><Statistic text="average" value={average} /></tr>
        <tr><Statistic text="positive" value={positive} /></tr>
          </tbody>
        ) : (
          <tbody>
        <tr>
          <td>No feedback given</td>
        </tr> 
        </tbody>
      )}
      
      
    </table>
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