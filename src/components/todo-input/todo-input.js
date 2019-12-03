import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import TodoTable from '../todo-table/todo-table';
import uuid from 'uuid/v1';

const TodoInput = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const addToList = event => {
    if (event.which === 13) {
      setList([...list, { id: uuid(), isSelected: false, name: event.target.value }]);
    }
  }

  return (
    <Container fixed>
      <Grid container item>
        <TextField onKeyDown={addToList} />
      </Grid>
      <Grid container item>
        {list.length > 0 && <TodoTable list={list} setList={setList} />}
      </Grid>
    </Container>
  );
}

export default TodoInput;