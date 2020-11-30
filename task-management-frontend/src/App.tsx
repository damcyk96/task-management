import React, { useEffect, useState } from 'react';
import './App.css';
import { TaskAPI } from './api/task.api';
import { TaskDTO } from './api/dto/task.dto';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import Task from './components/Task';
import CreateTaskModal from './components/CreateTaskModal';

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  useEffect(() => {
     async function fetchAll() {
       const resp = await TaskAPI.getAll();
       setTasks(resp);
     }
     fetchAll();
    }, [])

  return (
    <div className="App">
      <CreateTaskModal open={createTaskModalOpen} handleClose={() => setCreateModalOpen(false)} />
          <Typography variant="h6" style={{flexGrow: 1}}>
            Poor trello
          </Typography>
          <Button variant="contained" color="primary">Add new task</Button>
        </Toolbar>
      </AppBar>

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
