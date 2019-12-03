import React, { useState, useEffect } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Checkbox, Typography, TextField } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import './todo-table.css';

export const completed = React.createContext(false);

export const TodoTable = props => {
  const { list, setList, setCompletedItem } = props;

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
    // if (!itemToCheck.isCompleted) {
    //   setCompletedItem(true);
    // }
  }

  const editRow = rowToEdit => {
    const modifiedList = list.map(current => {
      if (current.id === rowToEdit.id) {
        current.modify = true;
        return current;
      } else {
        return current;
      }
    });
    setList(modifiedList);
  }

  const modifyRowName = (event, rowToEdit) => {
    if (event.which === 13) {
      const modifiedList = list.map(current => {
        if (current.id === rowToEdit.id) {
          current.name = event.target.value;
          current.modify = false;
          return current;
        } else {
          return current;
        }
      });
      setList(modifiedList);
    }
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
                <TableCell align="center" className={row.isCompleted ? 'todo-table-completed' : null} onDoubleClick={() => editRow(row)}>
                  {row.modify ?
                    <TextField defaultValue={row.name} onKeyDown={(event) => modifyRowName(event, row)} /> :
                    <Typography>{row.name}</Typography>}
                </TableCell>
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