import React, { useEffect, useState } from 'react';

const Counter = () => {
         const [count, setCount ]= useState(0);

         useEffect(() =>{
             document.title =`Total Cliks = ${count}`
         })


  return (
        <div>
            <p>you clicked {count}</p>
            <button onClick={()=> setCount( count + 1)} > Clik me</button>
        </div>
        );
};

export default Counter;
