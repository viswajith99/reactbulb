import React, { useState } from 'react';
import './Bulb.css';

const Bulb = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        
      
        <div className="bulb-container">
             <h3  >Bulb ON & OFF</h3>
            

            
            <div className={`bulb ${isOn ? 'on' : 'off'}`} onClick={handleClick}></div>
           
            
            <button onClick={handleClick} style={{fontWeight:'bold'}}>
                 {isOn ? 'OFF' : 'ON'}
            </button>
        </div>

        
    );
};

export default Bulb;
