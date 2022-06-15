import React, { useEffect, useState } from 'react';
import 'reactstrap';
import Home from "./pagina/Home";
import BarradeTarefa from './component/BarradeTarefa';
import jwtDecode from 'jwt-decode'
function App(props){
  const[Islogged, setIsLogged] = useState("")
 
  useEffect(async () => {
    buildJwt()
  }, [])

  const buildJwt = () =>{
    try{
      const jwt = localStorage.getItem('token')
      const user = jwtDecode(jwt)
      setIsLogged({email: user.email})
      console.log(user)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <BarradeTarefa user={Islogged}/>
      <Home />
    </div>
  );
}
export default App;