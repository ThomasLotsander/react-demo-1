import { useState } from 'react'
import Header from "./components/Header";
import UnorderdList from "./components/UnorderdList";
import Tasks from "./components/Tasks";

const App = () => {  
  
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Test data 1',
        day: 'Feb 7th at 3:30pm',
        reminder: true,        
    },
    {
        id: 2,
        text: 'Test data 2',
        day: 'Feb 5th at 2:30pm',
        reminder: true,        
    },
    {
        id: 3,
        text: 'Test data 3',
        day: 'Feb 18th at 08:00am',
        reminder: true,        
    },
    {
        id: 4,
        text: 'Test data 4',
        day: 'Jan 18th at 08:00am',
        reminder: true,        
    },
])

const ToggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))  
}

const DeleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder} /> 
        : 'No tasks to show'
      }
    </div>
  );
}

export default App;
