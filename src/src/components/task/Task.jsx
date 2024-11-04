import { StyleTask } from "./style"

export function Task(props) {
    return(
        <StyleTask>
           <p>{props.tarefa}</p>
           <button onClick={()=> props.onRemove(props.id)}>X</button>
        </StyleTask>
    )
}

