import React, { useState, useEffect } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Checkbox } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const TodoTable = props => {

  const { list, setList } = props;

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const removeFromTable = itemToRemove => {
    setList(list.filter(current => current.id !== itemToRemove.id));
  }

  const checkItem = itemToCheck => {
    const modifiedList = list.map(current => {
      if (current.id === itemToCheck.id) {
        current.isSelected = !current.isSelected;
        return current;
      } else {
        return current;
      }
    });
    setList(modifiedList);
  }

  return (
    <React.Fragment>
      <Paper>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(row => (
              <TableRow key={row.id}>
                <TableCell align="left">{<Checkbox checked={row.isSelected} onClick={() => checkItem(row)} />}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="right">{
                  <Button onClick={() => removeFromTable(row)}>
                    <Clear />
                  </Button>
                }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  )
}

export default TodoTable;