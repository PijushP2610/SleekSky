import React, {useState} from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
function STime(){
    const state = useState();
    const [count, setCount]=useState(0); 
    let newTime = new Date().toLocaleTimeString();
    //const [count, inCount] = useState(inCount)
    const [ctime, setCtime ] = useState(newTime);
    const UpdateTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
        setCount(count + 1);
        //inCount(count++);
    };

    
    return (
        <>
        <li>
            You Clicked at {ctime}
            
        </li>
        <footer>
        You clicked total {count}
        </footer>
        <button onClick={UpdateTime }>Click Here</button>
        
    </>);
}
export default STime;