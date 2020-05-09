import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

    console.log('persons: ', persons)
    
    setNewName('')
    setNewNumber('')
  }

  const handleSearch = (event) => {
    console.log('Searching for:', event.target.value)
    const searchTerm = event.target.value
    setSearchResult(persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  const handleSearchStop = (event) => {
    console.log('searching stopped')
    setSearchResult(null)
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
      <Filter handleSearch={handleSearch} handleSearchStop={handleSearchStop} />
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