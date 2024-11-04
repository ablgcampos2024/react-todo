import { useEffect, useState } from "react";
import { Task } from "../task/Task";
import { ContainerList } from "./styles";


export function List(){
    
   
    let valorStorage = [];
    if(localStorage.getItem('taskListStorage')){
        valorStorage = JSON.parse(localStorage.getItem('taskListStorage'));
    }
    
    const [taskList, setTaskList] = useState(valorStorage);
    const [newTask, setNewTask]   = useState('');

    function addTask(e){
        e.preventDefault(); //prevenindo o comportamento padrao de submit , nao envia o refresh
        // listagem.push({titulo:'nova tarefa',id: 4});
        let idTask = new Date().getTime();
        setTaskList([...taskList, {titulo: newTask, id: idTask}]);        
        setNewTask('');     

    }

    function removeTask(id){

        // let novaLista = taskList.filter((item) =>{
        //     if(item.id !== id){
        //         //mantem registro
        //         return true;
        //     }
        //     else{
        //         //remove registro
        //         return false;
        //     }
        // })
        // console.log(`remove tarefa ${id}`)
        // setTaskList(novaLista);// cria uma tasklist nova com as alteracoes de exclusao que estao na novalista

        //este é a mesma coisa que o de cima
        setTaskList(
            taskList.filter(item => (item.id!==id)) //retorna verdadeiro se o paramentro for diferente do que eu quero excluir
        )
    }

    useEffect(()=>{
        localStorage.setItem('taskListStorage',JSON.stringify(taskList));
    },[taskList])


    return(
        <ContainerList>
            <form onSubmit={addTask}>
                <input type="text"
                       placeholder="Digite sua Tarefa" 
                       value={newTask} 
                       onChange={(e)=> setNewTask(e.target.value)}                       
                />

                <button type="submit" disabled={newTask==''}>Criar</button>
            </form>

            {/* ctrl+ ; comenta <Task tarefa={listagem[0]}/> */}
            {
                taskList.map((item,index) => (                             //nome da funcao que eu estou enviando para o meu componente
                    <Task tarefa={item.titulo} id={item.id} key={item.id} onRemove={removeTask} />
                ))
            }                    

        </ContainerList>
    )
}