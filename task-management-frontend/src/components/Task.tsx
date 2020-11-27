import { Button, Card, CardActions, CardContent, Container, Typography } from '@material-ui/core'
import React from 'react'
import { TaskDTO } from '../api/dto/task.dto'

interface Props {
    data: TaskDTO;
}

const Task = ({data}: Props) => {
    return (
       <Card variant="outlined">
           <CardContent>
               <Typography
               color="textSecondary"
               gutterBottom>
                   {data.title}
               </Typography>
               <Typography variant="body2" component="p">
                   {data.description}
               </Typography>
           </CardContent>
           <CardActions>
               <Container >
               <Button size="small" variant="contained" color="primary" style={{marginLeft: 5}}>Edit</Button>
               <Button size="small" variant="contained" color="secondary" style={{marginLeft: 5}}>Delete</Button>
               </Container>
           </CardActions>
       </Card>
    )
}

export default Task
