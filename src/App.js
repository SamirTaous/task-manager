import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import { useState } from "react"

function App() {
  const [tasks, setTasks]=useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
]
);

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

  return (
    <div className="container">
      <Header/>
      {tasks.length==0 ? <h3>You have no tasks</h3>: <Tasks tasks={tasks} onDelete={deleteTask}/>}
    </div>
  );
}

export default App;
