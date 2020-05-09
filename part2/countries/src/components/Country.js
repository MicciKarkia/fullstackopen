import React from 'react'

const Country = ({ showCountries }) => {
  const country = showCountries[0]
  console.log(country)
  const listLanguages = country.languages.map(language => 
    <li key={language.name}>{language.name}</li>)
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}<br />population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {listLanguages}
      </ul>
      <img style={{ width: 100 }} src={country.flag} alt={'country flag'}/>
    </div>
  )
}

export default Country