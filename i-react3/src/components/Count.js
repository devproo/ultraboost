import React, {useState} from "react";

const Count = (props) =>  {
    console.log(props)
const [current, setCurrent] = useState(0)

const handle = () => {
    setCurrent(current + props.increments)
}
const btnstyle = {
background: props.buttonColor,

borderRadius: '10px',

}

return (

<div >
<button style={btnstyle} onClick= {handle}>
    {props.increments}</button>
<div>{current}</div>


</div>



)

}
// export default Count