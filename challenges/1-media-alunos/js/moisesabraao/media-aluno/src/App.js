import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    },
  },
}));

function App() {
  const classes = useStyles();
  const [primeiraNota, setPrimeiraNota] = useState(null);
  const [segundaNota, setSegundaNota] = useState(null);
  const [resultado, setResultado] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultado((parseInt(primeiraNota) + parseInt(segundaNota))/2);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Média Aritmética
          </Typography>
        </Toolbar>
      </AppBar>

      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField 
          type="number"
          label="Primeira Nota"
          required 
          value={primeiraNota} 
          onChange={(e) => setPrimeiraNota(e.target.value)} 
        />
        <TextField 
          type="number" 
          label="Segunda Nota"
          required
          value={segundaNota} 
          onChange={(e) => setSegundaNota(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">Calcular Média</Button>
      </form>
  <h1>Média: {resultado}</h1>
    </div>
  );
}

export default App;
