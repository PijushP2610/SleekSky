import React, {useState} from 'react';
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
        <h1>
           Current Time : {ctime}
        </h1>
        
    </>);
}
export default FTime;