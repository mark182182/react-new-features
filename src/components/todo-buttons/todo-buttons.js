import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import './todo-buttons.css';

export const TodoButtons = props => {
  const { list } = props;

  return (
    <>
      <Grid container item alignItems='center' className='todo-buttons-info'>
        <Typography variant='subtitle2'>{list ? list.length : 0} items left</Typography>
      </Grid>
      <Grid container item className='todo-buttons'>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </Grid>
    </>
  )
}