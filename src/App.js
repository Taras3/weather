import React from 'react';
import Weather from './components/Weather/Weather';
import Form from './components/Form/Form';

const API_KEY = '4ab60682cd93dae978996a066ef729ac';

class App extends React.Component {

 state = {
  temp: undefined,
  city: undefined,
  country: undefined,
  error: undefined
}


   gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
    const api_url = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      error: undefined
    })
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      error: "Enter the city name"
    })
  }
  }
  render(){

  return (
      
        <div className='app'>
          <h1>Weather</h1>
          <Form weatherMethod={this.gettingWeather} />
          <Weather 
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            error={this.state.error}
          />
        </div>
      
 
  )
}
}

export default App;
