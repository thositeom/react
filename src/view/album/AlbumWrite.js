import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

export default function AlbumWrite() {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
      />
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
      />


    </Box>
  );
}