import React, {useState} from 'react';
import logo from './logo.png';
import './FTime.css';
function FTime(){
    let Time = new Date().toLocaleTimeString();
    const [ctime, setCtime ] = useState(Time);
    const UpdateTime = () =>{
        Time = new Date().toLocaleTimeString();
        setCtime(Time);
    };
    setInterval(UpdateTime, 1000);
    return (
        <>
        <div className='FTime'>
            <div className='header'>
                 <img src={logo} className="App=logo" alt="Logo"/>
                
                <h2>
                    Current Time : {ctime}
                    
                </h2></div></div>
        
    </>);
}
export default FTime;
