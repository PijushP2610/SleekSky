import { getByDisplayValue } from '@testing-library/dom';
import React, {useState} from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import './STime.css'
function STime(){
    const state = useState();
    const TArray = [];
    const [count, setCount]=useState(0); 
    let newTime = new Date().toLocaleTimeString();
    //const [count, inCount] = useState(inCount)
    const [ctime, setCtime ] = useState(newTime);
    const UpdateTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
        setCount(count + 1);
        TArray.push(ctime);
        //inCount(count++);
        console.log(TArray);
        
    };
    

    
    return (
        <>
        <div className='STime'>
            <div className='main'>
                <div className='sidebar'>
                    <button onClick={UpdateTime}>Click Here</button>
                </div>
                <div className='container'>
                    <li>You Clicked at {ctime}</li>   

                </div>
                

            </div>
            <div className='footer'>
                You clicked total {count}

            </div>

        </div>

        
    </>);
}
export default STime;
