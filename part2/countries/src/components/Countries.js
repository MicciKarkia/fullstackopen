import React from 'react'
import Country from './Country'

const Countries = ({ showCountries }) => {
  const message = 'Too many matches, specify another filter'
  const listCountries = showCountries.map(country => 
    <li key={country.numericCode}>{country.name}</li>
  )

  const showSearchResult = () => {
    if (showCountries.length > 10) {
      return (
        <p>{message}</p>
      )
    } else if (showCountries.length > 1) {
      return (
        <ul style={{listStyle: 'none', padding: 0}}>
        {listCountries}
      </ul>
      )
    } else if (showCountries.length === 1) {
      return (
        <Country showCountries={showCountries} />
      )
    }
  }

  return (
    <div>
      {showSearchResult()}
    </div>
  )
}

export default Countries