import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import './todo-buttons.css';

export const TodoButtons = props => {
  const { list, filter, setFilter } = props;

  const modifyFilter = event => {
    const clickedName = parseInt(event.currentTarget.id);
    console.log(clickedName);
    switch (clickedName) {
      case 0:
        setFilter(0);
        break;
      case 1:
        setFilter(1);
        break;
      case 2:
        setFilter(2);
        break;
    }
  }

  return (
    <>
      <Grid container item alignItems='center' className='todo-buttons-info'>
        <Typography variant='subtitle2'>{list ? list.length : 0} items left</Typography>
      </Grid>
      <Grid container item className='todo-buttons'>
        <Button id={0} className={filter === 0 ? 'todo-button-selected' : null} onClick={modifyFilter}>All</Button>
        <Button id={1} className={filter === 1 ? 'todo-button-selected' : null} onClick={modifyFilter}>Active</Button>
        <Button id={2} className={filter === 2 ? 'todo-button-selected' : null} onClick={modifyFilter}>Completed</Button>
      </Grid>
    </>
  )
}