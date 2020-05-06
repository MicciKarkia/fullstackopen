import React from 'react';
import ReactDOM from 'react-dom';

/*const Courses = ({ courses }) => {
  console.log('courses', courses)
  return (
    courses.map(course => 
      <Course key={course.id} course={course} />)
  )
}*/

const Course = ({ course }) => {
  console.log('course props is', course)
  return (
    <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>    
  )
}

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <div>
        {courses.map(course =>
          <Course key={course.id} course={course} />)}
        
      </div>
    </div>
  )
}

//<Courses courses={courses} />

ReactDOM.render(<App />, document.getElementById('root'))