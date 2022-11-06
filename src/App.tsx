import { useState } from "react";
import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Info } from "./components/Info";
import { Empty } from "./components/Empty";
import { Task } from "./components/Task";

function App() {
  const [task, setTask] = useState<Array<any>>([]);
  const [newTask, setNewTask] = useState("");
  const [counterDone, setCounterDone] = useState(0)
  
  


  //----------- Adicionar nova tarefa-----------------------
  function handleNewTaskAdd() {
    if (task.map(item => item.name).includes(newTask)) {
      return alert("Tarefa já existe na lista");
    }

    const data = {
      id: task.length + 1,
      name: newTask,
      done: false,
    };

    setTask((item) => [...item, data]);
    setNewTask("");
  }


  //------------------Remover tarefas----------------------
  function handleRemoveTask(id: number) {
     
    setTask(item => item.filter( filtered => filtered.id !== id))

    let listCountDone = [...task]
    let data = listCountDone.filter(item => item.done === true)
    setCounterDone(data.length)
  }
  

  function handleToggleDone(id: number, done: boolean) {
     
    let newList = [...task]
    
      for(let i in newList) {
        if (newList[i].id === id) {
          newList[i].done = !done
        }
      }
      
      setTask(newList)

      let listCountDone = [...task]
      let data = listCountDone.filter(item => item.done === true)
      setCounterDone(data.length)
  }
  


  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.body}>
        <div className={styles.add}>
          <Input
            placeholder="Digite a sua tarefa"
            value={newTask}
            change={(e) => setNewTask(e.target.value)}
          />
          <Button handleCreate={handleNewTaskAdd} />
        </div>

        <Info 
          counterTask={task.length} 
          done={counterDone}
        />

        {task.length > 0 ? 
        <>
          {task.map(item => 
          <Task
            name={item.name}
            id={item.id}
            done={item.done}
            handleRemove={() => handleRemoveTask(item.id)}
            handleDone={() => handleToggleDone(item.id, item.done)}
          />
          )}
        </>
        : 
        <Empty />}
      </div>
    </div>
  );
}

export default App;
