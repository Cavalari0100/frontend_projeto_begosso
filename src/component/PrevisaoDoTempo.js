import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
function PrevisaoDoTempo() {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  if (location == false) {
    return (
      <Fragment>
        Você precisa habilitar a localização no browser , recarregue a pagina para carregar a previsão do tempo!!
      </Fragment>
    )
  } else {
    if (location == false) {
      return (
        <Fragment>
          Você precisa habilitar a localização no browser o/
        </Fragment>
      )
    } else if (weather == false) {
      return (
        <Fragment>
          Carregando o clima...
        </Fragment>
      )
    } else {
      return (
        <div style={{padding: '1em' , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
          <Fragment>
            <h4>Tempo/Clima de hoje </h4>
            <p><b>{weather['weather'][0]['description']}</b></p>
            <hr />
            <ul>
              <li>Temperatura atual: {weather['main']['temp']}°</li>
              <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
              <li>Temperatura minima: {weather['main']['temp_min']}°</li>
              <li>Pressão: {weather['main']['pressure']} hpa</li>
              <li>Humidade: {weather['main']['humidity']}%</li>
              <li>Velocidade do vento: {weather['wind']['speed']}K/h</li>
              <li>Qtd Nuvens: {weather['cloud']['all']}K/h</li>
            </ul>
          </Fragment>
        </div>
      );
    }
  }
}
export default PrevisaoDoTempo;