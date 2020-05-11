import React from 'react'
import Country from './Country'

const Countries = ({ showCountries, handleClickOpen, handleClickClose, showCountry, countryDetails, weatherDetails }) => {
  
  const message = 'Too many matches, specify another filter'

  console.log('showCountries: ', showCountries)
  console.log('countryDetails', countryDetails)
  console.log('weatherDetails: ', weatherDetails)
  
  const listCountries = showCountries.map((listCountry, index) =>
    <li
      key={listCountry.numericCode}>
      <span>{listCountry.name} </span>
      {(!showCountry || listCountry.name !== countryDetails.name) ?
        <button onClick={() => handleClickOpen(index)}>show</button> : <button onClick={() => handleClickClose(index)}>close</button>}
      {showCountry && countryDetails.name === listCountry.name && <div><Country countryDetails={countryDetails} weatherDetails={weatherDetails} /></div>}
    </li> 
  )

  /*
{listCountry.name}
      {(!showCountry || listCountry.name !== countryDetails.name) ?
        <button onClick={() => handleClickOpen(index)}>show</button> : <button onClick={() => handleClickClose(index)}>close</button>}
      {showCountry && countryDetails.name === listCountry.name && <div><Country countryDetails={countryDetails} weatherDetails={weatherDetails} /></div>}

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
        <ul style={{listStyle: "none", padding: 0}}>
        {listCountries}
      </ul>
      )
    } else if (showCountries.length === 1) {
        return (
           <div><Country countryDetails={countryDetails} weatherDetails={weatherDetails} /></div>
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