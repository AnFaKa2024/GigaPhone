import Logo from "../assets/logo.png"

import Login from "../assets/login.png"

export default function Cabecalho() {
  return (
    <header>

      <div>
      <img src={Logo}/>
      </div>

      <h1>Giga Phone</h1>
      
      <div>
      <img
        src={Login} 
        alt="Login"
      />
      </div>


      
    </header>
  );
}

