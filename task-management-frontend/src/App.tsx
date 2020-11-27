import React, { useEffect, useState } from 'react';
import './App.css';
import { TaskAPI } from './api/task.api';
import { TaskDTO } from './api/dto/task.dto';
import { Grid } from '@material-ui/core';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>([])

  useEffect(() => {
     async function fetchAll() {
       const resp = await TaskAPI.getAll();
       setTasks(resp);
     }
     fetchAll();
    }, [])

  return (
    <div className="App">
      <Grid container spacing={1} style={{padding: 10}}>
        {tasks.map(task => {
         return(
        <Grid item xs={3}>
            <Task data={task} />
          </Grid>
         
         );
       })}
      </Grid>
    </div>
  );
}

export default App;
