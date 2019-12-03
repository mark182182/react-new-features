import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Paper } from '@material-ui/core';
import { TodoTable } from '../todo-table/todo-table';
import { TodoButtons } from '../todo-buttons/todo-buttons';
import { TodoQuote } from '../todo-quote/todo-quote';
import uuid from 'uuid/v1';
import './todo-input.css';

export const TodoInput = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const previousList = localStorage.getItem('list');
    if (previousList) {
      setList(JSON.parse(previousList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const addToList = event => {
    if (event.which === 13) {
      setList([...list, { id: uuid(), isCompleted: false, name: event.target.value, modify: false }]);
    }
  }

  return (
    <Container fixed>
      <Paper className='todo-wrapper'>
        <Grid container item justify='center'>
          <TextField onKeyDown={addToList} />
        </Grid>
        <Grid container item justify='center' className='todo-list-container'>
          {list.length > 0 && <TodoTable list={list} setList={setList} filter={filter} />}
        </Grid>
        <Grid container item className='todo-buttons-container'>
          <TodoButtons list={list} filter={filter} setFilter={setFilter}></TodoButtons>
        </Grid>
      </Paper>
      <TodoQuote list={list} />
    </Container>
  );
}