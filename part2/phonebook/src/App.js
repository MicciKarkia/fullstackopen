import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
 
    const isFound = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
    const showPopup = () => window.alert(`No duplicates! \n${newName} is already added to phonebook`)
    const addPersonObject = () => setPersons(persons.concat(personObject))

    isFound ? showPopup() : addPersonObject()
    
    setNewName('')
    setNewNumber('')
  }

  const handleSearch = (event) => {
    console.log('Searching for:', event.target.value)
    const searchTerm = event.target.value
    setSearchResult(persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName}
        handleNameChange={handleNameChange} newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchResult={searchResult}/>
    </div>
  )
}

export default App