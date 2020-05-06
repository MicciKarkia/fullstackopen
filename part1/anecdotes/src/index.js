import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [highScore, setHighScore] = useState('')
  const [highScoreAnecdote, setHighScoreAnecdote] = useState('')

  const handleVote = () => {
    console.log('voted')
    const newPoints = [...points]
    newPoints[selected] += 1
    const highScoreIndex = newPoints.indexOf(Math.max(...newPoints.map(point => point)))
    console.log(highScoreIndex)
    setPoints(newPoints)
    setHighScoreAnecdote(anecdotes[highScoreIndex])
    setHighScore(newPoints[highScoreIndex])
  }

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
      </div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <div>
        <h2>Anecdote with most votes</h2>
        {highScore ?
          (<div>{highScoreAnecdote}
          <p>has {highScore} votes</p></div>)
        : (<p>No votes yet</p>)}
        
      </div>
      

    </>
  )
}

const anecdotes = [
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Programming can be fun, so can cryptography; however they should not be combined.',
  'Why do we never have time to do it right, but always have time to do it over?',
  'Any fool can use a computer. Many do.',
  'It\'s not at all important to get it right the first time.It\'s vitally important to get it right the last time.',
  'I have always found that plans are useless, but planning is indispensable.',
  'The perfect project plan is possible if one first documents a list of all the unknowns.',
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
