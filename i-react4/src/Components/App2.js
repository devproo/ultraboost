import { useRef } from "react";

function App2() {
    const inputElement = useRef()
    const focusInput = () => {
        inputElement.current.focusInput()



    }
    return (


<>
<input
type= "text"
ref={inputElement}
/>
<button onChange={focusInput}> focus</button>

</>

    )
}


export default App2



