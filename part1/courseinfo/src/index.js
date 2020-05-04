import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ content }) => {
  console.log(content)
  return (
    <div>
      <Part part={content[0]} />
      <Part part={content[1]} />
      <Part part={content[2]} />
    </div> 
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={total} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
