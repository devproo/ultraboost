import { useReducer } from "react";

const initialTodos = [
{
id: 1,
title: 'Todo 1',
Complete: false,


},

{
id: 2,
title: "Todo 2",
Complete: false,



}


]

const reducer = (state, action) => {
switch (action.type ) {
    case  "complete":
        return state.map((todo) => {
if (todo.id === action.id) {

    return { ...todo, Complete: !todo.Complete}
} else {

    return todo
}


        })
        default:
            return state
}

}


function Todos() {
const [todos, dispatch] = useReducer(reducer, initialTodos)
const handleComplete = (todo) => {

dispatch({type: "complete", id: todo.id})


}
return (
<>
{todos.map((todo) => (
<div key={todo.id}>
    <label>

<input
type='checkbox'
checked={todo.Complete}
onChange= {() => handleComplete(todo)}


/>
{todo.title}
    </label>



</div>


))}


</>

    )
    
}
export default Todos