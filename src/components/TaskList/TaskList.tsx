import * as C from './styles';

import { ITask } from "../../interfaces/Task";

interface props {
  taskList: ITask[];
  handleDelete(id:number):void;
  handleEdit(task:ITask):void
}

export default function TaskList ({taskList, handleDelete, handleEdit}:props) {
  return (
<>
{
  taskList.length > 0 ? (
    taskList.map(task =>(
      <C.Task key={task.id}>
        <C.Details>
          <C.TextH4>{task.title}</C.TextH4>
          <p>Dificuldade:{task.difficulty}</p>
        </C.Details>
        <C.Actions>
          <C.Icons className='bi bi-pencil' onClick={()=>handleEdit(task)}></C.Icons>
          <C.Icons className='bi bi-trash' onClick={()=>handleDelete(task.id)}></C.Icons>
        </C.Actions>
      </C.Task >
    ))
  ):(
    <p>Não há tarefas Cadastradas</p>
  )
}
</>
  );
}
