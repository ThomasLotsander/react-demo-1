import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {  
  
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const result = await fetch('http://localhost:5000/tasks');
    const data = await result.json();
    return data
  }

const addTask = async (task) => {
  const result = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await result.json();
  setTasks([...tasks, data]) 

}

const ToggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))  
}

const DeleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task) => task.id !== id))  
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder} /> 
        : 'No tasks to show'
      }
    </div>
  );
}

export default App;
