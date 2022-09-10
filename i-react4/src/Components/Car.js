import { useState } from "react";
import ReactDOM from "react-dom/client";
function Car () {
const [car, setCar] = useState({
brand: "ford",
model: "mustang",
year: "1990",
color: "red"
})
const updateColor = () => {
setCar(previousState => {
return { ...previousState, color: "orange"}


})

}



return (
<>

<h1> my  {car.brand}</h1>
<p>

it is {car.color} and {car.year} , {car.model}

</p>
<button
type="button"
onClick={updateColor}

>Blue</button>

</>

)
}

export default Car