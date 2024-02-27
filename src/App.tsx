import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import * as C from "./appStyle";
import { ITask } from "./interfaces/Task";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };
  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };
  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal?.classList.remove("hide");
    } else {
      modal?.classList.add("hide");
    }
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty };

    const updateItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });
    setTaskList(updateItems);
    hideOrShowModal(false);
  };
  return (
    <>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            handleUpdate={updateTask}
            task={taskToUpdate}
          />
        }
      />
      <Header />
      <C.Main>
        <div>
          <C.H2>O que você vai fazer?</C.H2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <C.H2>suas tarefas:</C.H2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </C.Main>
      <Footer />
    </>
  );
}

export default App;
