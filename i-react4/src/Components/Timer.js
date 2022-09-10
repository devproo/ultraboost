import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Timer () {
const [count, setCount] = useState(0)
const [calculation, setCalculation]  =useState(0)

useEffect (() => {
setCalculation (() => count * 2)

}, [count])
// useEffect (() => {
// let timer = setTimeout(() => {
//     setCount((count) => count + 1)
// }, 1000);


// }, [])

return <>
<h1> {count}</h1>
<button onClick={() => setCount((c) => c + 1)}>+</button>
<p>Calculation: {calculation}</p>

</>
}

export default Timer