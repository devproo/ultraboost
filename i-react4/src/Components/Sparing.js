import { useMemo, useState } from "react";


const Sparing  = () =>  {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([])
    const calculation = useMemo(() => expensiveCalculation(count), [count])

    const increment  = ()  =>{
setCount((c) => c + 1)
 } 

 const addTodo = () => {

    setTodos((t) => [...t, "new todo"])
 }
 
return (
<div>
    <div>
        <h2>my todos</h2>
        {todos.map((todo, index) => {
            return <p onClick={addTodo}>{todo}</p>
            })}
           <button onClick={addTodo}> add todo</button>
    </div>
    <hr/>
    <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>expensive calculation</h2>
        {calculation}

    </div>
</div>

)


}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
export default Sparing