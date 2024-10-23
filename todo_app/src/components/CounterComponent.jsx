import React from "react";
import { useState } from "react";

const CounterComponent = ()=>{
    // here it creates an array of size 2 where the index 1 stores the value passed in useState() parenthesis as parameter and the 1st index stores the function 
    const [count, setCount] = useState(11);
    const [value, setValue] = useState('No. is Even')
    
    return(
        <div>
            <p>Count Coponent - {count}</p>
            <h6 >The value is - {count%2===0 ? 'Even' : 'Odd'} </h6>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>

        </div>
    )
}

export default CounterComponent;