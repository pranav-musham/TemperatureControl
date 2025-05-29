import React , { useState } from "react";

const App=() =>{
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature =() =>{
    const newTemperature = temperatureValue +1;
    if(newTemperature>=15){
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemperature);
  }

  const decreaseTemperature =() =>{
    const newTemperature = temperatureValue -1;
    if(newTemperature<15){
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);
  }

  return (
    <div className="app-container"> 
    <div className="temperature-display-container">
      <div className={ `temperature-display ${temperatureColor}`}> {temperatureValue}  
        </div> 
</div>
      <div className='button-container'>
        <button onClick={()=> increaseTemperature()}> + </button>
        <button onClick={()=> decreaseTemperature()}> - </button>
     
    </div>
    </div>
)
}

export default App;
