import React, { useEffect, useState } from 'react';
import { Typography, Card, Grid } from '@material-ui/core';

export const TodoQuote = props => {
  const setCompletedItem = { props };

  const [quote, setQuote] = useState('');

  const quoteUrl = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'

  // useEffect(() => {
  //   const getNewQuote = async () => {
  //     await fetch(quoteUrl)
  //       .then(response => {
  //         setQuote(JSON.stringify(response));
  //       })
  //       .catch(error => {
  //         console.log(error.message);
  //       });
  //   }
  //   getNewQuote();
  //   setInterval(() => {
  //     setQuote(null);
  //     setCompletedItem(false);
  //   }, 4000);
  // }, [completed]);

  return (
    <>
      <Grid container item>
        <Card>
          {quote && <Typography>{quote}</Typography>}
        </Card>
      </Grid>
    </>
  )
}
