import React, {useState, useRef} from 'react';
import PartnersList from './PartnersList';
function App() {
  const [partners, setPartners] = useState(1);
  const rangeRef = useRef();
  
  function clearPartnersList(e){
    setPartners(1);
    rangeRef.current.value = null
  }
  function searchNearbyPartners(e){
    var range = rangeRef.current.value;
    if(range==='' || isNaN(range)){
      alert('Please enter a valid number of kilometers range');
    }else{
      
      fetch("http://localhost:3001/partners?range=" + range)
      .then(res => res.json())
      .then(
        
        (result) => {
          setPartners(result);
        },
        (error) => {
         alert("An error has occurred on fetching data.")
        }
      )
      
    }

  };
  return (
    <div id="container">
      <label>Range: </label>
      <input ref={rangeRef} type="text"/>
      <button onClick={searchNearbyPartners}>Search</button>
      <button onClick={clearPartnersList}>Clear</button>
      <PartnersList partners={partners}/>
      <p id="messageContainer"></p>
    </div>
  )
}

export default App;
