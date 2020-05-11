import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])
  const [showCountry, setShowCountry] = useState(false)
  const [query, setQuery] = useState('')
  const [countryDetails, setCountryDetails] = useState({})
  const [weatherDetails, setWeatherDetails] = useState([])

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
    setCountryDetails('')
    setWeatherDetails([])
    if (searchResult.length === 1) {
      setQuery(searchResult[0].capital)
      setCountryDetails(searchResult[0])
    }
  }

  console.log('query: ', query)

  useEffect(() => {
    const getWeather = () => {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
        .then(response => {
          console.log('api res:', response)
          setWeatherDetails([response.data.current])
        })
    }
    if (query) {
      getWeather()
    }
  }, [query])

  const handleClickOpen = (index) => {
    console.log('clickopen index', index)
    console.log(showCountries[index].capital)
    setWeatherDetails([])
    setQuery(showCountries[index].capital)
    setCountryDetails(showCountries[index])
    setShowCountry(true)
    console.log('countryDetails', countryDetails)
    console.log('showCountry is', showCountry)
  }

  const handleClickClose = (index) => {
    console.log('click close index', index)
    setShowCountry(false)
    setCountryDetails({})
    setQuery('')
    setWeatherDetails([])
  }

  return (
    <div>
      <Filter handleSearch={handleSearch} />
      <Countries showCountries={showCountries} handleClickOpen={handleClickOpen} handleClickClose={handleClickClose} showCountry={showCountry} countryDetails={countryDetails} weatherDetails={weatherDetails} />
    </div>
  )
}

export default App
