import React, { useState } from 'react'

 function A() {
    const [count,setCount]=useState(0);

    if(count==4)
    {
        throw new Error("Count is invalid")
    }
  return (
    <div>
        <h1 onClick={()=> setCount(count+1)}>Count is {count}</h1>
    </div>
  )
}
export default A;