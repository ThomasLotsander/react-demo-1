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

  return (
    <div className="App">
      {/* Exempel på att skicka med prop title till Header */}
      {/* <Header title="hello"/> */}
      <Header />
      <UnorderdList />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
