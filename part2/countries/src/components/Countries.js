import React, { useState } from 'react'
import Country from './Country'

const Countries = ({ showCountries }) => {
  const [showCountry, setShowCountry] = useState(false)
  const [countryDetails, setCountryDetails] = useState(null)
  const message = 'Too many matches, specify another filter'

  console.log(showCountries)

  const handleClickOpen = (index) => {
    console.log('clickopen index', index)
    console.log(showCountries[index])
    setShowCountry(true)
    setCountryDetails(showCountries[index])
  }

  const handleClickClose = (index) => {
    console.log('click close index', index)
    setShowCountry(false)
    setCountryDetails(null)
  }

  const listCountries = showCountries.map((listCountry, index) =>
    <li
      key={listCountry.numericCode}>
      {listCountry.name}
      {(!showCountry || listCountry.name !== countryDetails.name) ?
        <button onClick={() => handleClickOpen(index)}>show</button> : <button onClick={() =>handleClickClose(index)}>close</button>}
      {showCountry && countryDetails.name === listCountry.name && <div><Country country={countryDetails} /></div>}
      </li>
  )

  /*
{(!countryDetails || listCountry.name !== countryDetails.name) && <button onClick={() => handleClickOpen(index)}>show</button>}

  {(!showCountry || (listCountry.name !== showCountries[index].name)) && <button onClick={() => handleClickOpen(index)}>show</button>}
      {countryDetails.name === listCountry.name && <button onClick={() =>handleClickClose(index)}>close</button>} 
      {showCountry && countryDetails.name === listCountry.name && <div><Country country={countryDetails} /></div>}

  {countryDetails.name === listCountry.name ? <button onClick={handleClickClose}>close</button> :<button onClick={() => handleClickOpen(index)}>show</button>}
      {showCountry && countryDetails.name === listCountry.name && <div><Country country={countryDetails} /></div>}
  
  {!showCountry && <button onClick={() => handleClickOpen(index)}>show</button>}
      {showCountry && countryDetails.name === listCountry.name && <div><button onClick={handleClickClose}>x</button><Country country={countryDetails} /></div>}*/

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
        <Country country={showCountries[0]} />
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