import React from 'react'


const Country = ({ countryDetails, weatherDetails }) => {

  console.log('countryDetails: ', countryDetails)
  console.log('weatherDetails', weatherDetails)
  
  const showCountry = () => {
    console.log('showWeather called')
    if (weatherDetails.length) {
      const country = countryDetails
      const weather = weatherDetails[0]

      console.log('country: ', country)
      console.log('weather: ', weather)

      const listLanguages = country.languages.map(language => 
        <li key={language.name}>{language.name}</li>)

      return (
        <div>
          <h2>{country.name}</h2>
          <p>capital {country.capital}<br />population {country.population}</p>
          <h3>Spoken languages</h3>
          <ul style={{marginTop: 0}}>
            {listLanguages}
          </ul>
          <img style={{ width: 100 }} src={country.flag} alt={'country flag'} />
          <h3>Weather in {country.capital}</h3>
          <p><b>temperature:</b> {weather.temperature} celcius</p>
          <img style={{ width: 50 }} src={weather.weather_icons[0]} alt="weather icon" />
          <p><b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
      )
    }
  }
  
  return (
    <div>
      {showCountry()}
    </div>
  ) 
  
}

export default Country