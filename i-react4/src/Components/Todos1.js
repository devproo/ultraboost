import { memo } from "react";

const Todos1 = ({todos, addTodo} ) => {

console.log('child rendere')

return (<>
<h2>my todos</h2>
{todos.map((todo, index) => {
  return <p key={index}>{todo}</p>



})}
<button onClick={addTodo}>add todo</button>

</>
)



}




export default Todos1