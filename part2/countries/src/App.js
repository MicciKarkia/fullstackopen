import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    console.log(event.target.value)
    const searchTerm = event.target.value
    const searchResult = countries.filter(country =>
      country.name
        .toUpperCase()
        .includes(searchTerm.toUpperCase()))
    console.log('search results: ', searchResult)
    setShowCountries(searchResult)

  }

  return (
    <div>
      <Filter handleSearch={handleSearch} />
      <Countries showCountries={showCountries}/>
    </div>
  )
}

export default App
