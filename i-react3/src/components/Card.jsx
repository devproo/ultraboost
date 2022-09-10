import App from "../App"
import React, {useEffect} from "react"
import { useRef } from "react"

export  const Card = ({name}) => {
    const divRef = useRef()
    const changeStyles = () => {
console.log(divRef.current.style.color = 'red')

    }

return <div ref={divRef} onClick={changeStyles} > I am a card {name}</div>

}

