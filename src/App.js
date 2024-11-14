import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
import { useState } from "react"

function App() {
  const [showAddTask,setShowAddTask]=useState(false);
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

const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id==id ? {
    ...task,reminder:!task.reminder
  } : task))
}

const addTask=(task)=>{
  let i=1;
  tasks.forEach((task)=>task.id!==i ? i : i++);
  let newTask={id:i,...task};
  setTasks([...tasks,newTask]);
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} shown={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length==0 ? <h3>You have no tasks</h3>: <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>}
    </div>
  );
}

export default App;
