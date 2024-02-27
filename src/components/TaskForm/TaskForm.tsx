import * as C from "./styles";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ITask } from "../../interfaces/Task";
interface props {
  btnText: string;
  taskList:ITask[]
  setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>>
  task?:ITask | null;
  handleUpdate?(id:number, title: string, difficulty:number):void
}

export default function TaskForm({ btnText,taskList, setTaskList, task, handleUpdate}: props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() =>{
    if(task){
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }

  },[task])

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleUpdate){
   handleUpdate(id,title, difficulty)
    }else{
      const id = Math.floor(Math.random() *1000);

    const newTask:ITask={id, title, difficulty}
    setTaskList!([...taskList, newTask]);

    setDifficulty(0);
    setTitle('')
    
    }
  };
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.name ==='title'){
 setTitle(e.target.value);
    }else{
setDifficulty(parseInt(e.target.value));
    }
  };
  return (
    <C.Form onSubmit={addTaskHandler}>
      <C.InputContainer>
        <C.Label htmlFor="title">Titulo:</C.Label>
        <C.Input
          type="text"
          name="title"
          placeholder="titulo da tarefa"
          onChange={handleChange}
          value={title}
        />
      </C.InputContainer>
      <C.InputContainer>
        <C.Label htmlFor="difficulty">Dificuldade:</C.Label>
        <C.Input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </C.InputContainer>
      <C.InputSubmit type="submit" value={btnText} />
    </C.Form>
  );
}
