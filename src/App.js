import './App.css';
//import Client from "scaleway-api-client";
import axios from 'axios';


function App() {

  //const api = new Client("SCW7KHZE270KX4D4WCXS");

  const token = 'dab0eb55-b986-455a-b17e-634d13260104';
  const headers = {
    "X-Auth-Token": token,
    "Content-Type": "application/json"
  };

  //const instanceId = "6f724d1b-8472-4127-a7c3-2d102fd25186";
  //const instanceId = document.getElementById("idVM");

  async function Click() {
    const instanceId = document.getElementById("idVM").value;
    console.log(instanceId);

    try {
      const response = await axios.get(
        `https://api.scaleway.com/instance/v1/zones/fr-par-1/servers/${instanceId}`,
        { headers }
      );
      const instance = response.data.server;
      console.log("L'adresse IP de l'instance est :", instance.public_ip.address);
      let resultValue = instance.public_ip.address;
      
      const result = document.getElementById("result");
      console.log(resultValue);
      result.innerHTML = resultValue;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'adresse IP :", error);
    }
  }  


  return (
    
    <div className="App">
      <header className="App-header">
      <label>Entrer l'id de la VM <input type="text" id="idVM"/></label>
        <button className='Button VM' id='myButton' onClick={Click} name='clic'>Cliquer ici</button>
        <div id="result">Le résultat sera affiché ici</div>
      </header>
    </div>
  );
}

export default App;
