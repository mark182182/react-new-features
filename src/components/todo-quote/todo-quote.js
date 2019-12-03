import React, { useEffect, useState } from 'react';
import { Typography, Card, Grid } from '@material-ui/core';
import './todo-quote.css';

export const TodoQuote = props => {
  const { list } = props;
  const [quote, setQuote] = useState('');
  const [completed, setCompleted] = useState('');
  const quoteUrl = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';

  useEffect(() => {
    setQuote(null);
    const checkIfCompleted = list
      .every(current => current.isCompleted);
    if (checkIfCompleted) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [list])

  useEffect(() => {
    const getNewQuote = async () => {
      const res = await fetch(quoteUrl);
      const resJson = await res.json();
      setQuote(resJson.starWarsQuote);
    }
    getNewQuote();
    setCompleted(false);
  }, [completed]);

  return (
    <>
      <Grid container item className='todo-quote-container'>
        <Card>
          {quote && <Typography>{quote}</Typography>}
        </Card>
      </Grid>
    </>
  )
}
