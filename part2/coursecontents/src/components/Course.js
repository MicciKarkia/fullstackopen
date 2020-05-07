import React from 'react'

const Course = ({ course }) => {
  console.log('course props is', course)

  const Header = ({ name }) => {
  console.log('Header props is', name)
  return (
    <h2>{name}</h2>
  )
}

const Total = ({ parts }) => {
  const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <p><strong>total of {totalAmount} exercises</strong></p>
  ) 
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  console.log('Content props', parts)
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

  return (
    <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>    
  )
}

export default Course