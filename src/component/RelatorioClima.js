import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Row ,Col} from 'reactstrap';

function RelatorioClima() {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
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
        <div>
          <div style={{ padding: '1em', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <Fragment>
              <h4>Tempo/Clima de hoje </h4>
              <p><b>{weather['weather'][0]['description']}</b></p>
              <p><b>{weather['name']}</b></p>
              <hr />
              <ul>
                <li>Temperatura atual: {weather['main']['temp']}°</li>
                <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
                <li>Temperatura minima: {weather['main']['temp_min']}°</li>
                <li>Pressão: {weather['main']['pressure']} hpa</li>
                <li>Humidade: {weather['main']['humidity']}%</li>
                <li>Velocidade do vento: {weather['wind']['speed']}K/h</li>
                <li>Velocidade do vento: {weather['sys']['country']}K/h</li>
              </ul>
            </Fragment>
            <hr></hr>
            <Row>
            <Col><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14779.451952498344!2d-50.48252745!3d-22.169286849999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495a670db16f76b%3A0xb9ee8e64e5cb509e!2sUsina%20Ib%C3%A9ria%2C%20Bor%C3%A1%20-%20SP%2C%2019740-000!5e0!3m2!1spt-BR!2sbr!4v1651242202408!5m2!1spt-BR!2sbr" width="110%" height="150%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
            </Row>
          </div>

        </div>
      );
    }
  }
}
export default RelatorioClima;