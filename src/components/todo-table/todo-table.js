import React, { useState, useEffect } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Checkbox } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

export const TodoTable = props => {

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
        current.isCompleted = !current.isCompleted;
        return current;
      } else {
        return current;
      }
    });
    setList(modifiedList);
  }

  return (
    <>
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
                <TableCell align="left">{<Checkbox checked={row.isCompleted} onClick={() => checkItem(row)} />}
                </TableCell>
                <TableCell align="center" className={!row.isCompleted ? 'todo-table-completed' : null}>{row.name}</TableCell>
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
    </>
  )
}