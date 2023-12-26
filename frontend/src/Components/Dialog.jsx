import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category,
  });

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues(prevValues => ({
      ...prevValues, 
      [value.target.id]: value.target.value,
    }));
  };

  return (
      <Dialog 
        open={props.open} 
        onClose={handleClose}
      >
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus 
            margin="dense" 
            id="name" 
            label="Nome do jogo" 
            defaultValue={props.name} 
            onChange={handleChangeValues} 
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            defaultValue={props.category} 
            onChange={handleChangeValues} 
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus 
            margin="dense" 
            id="cost" 
            label="Preço" 
            defaultValue={props.cost} 
            onChange={handleChangeValues} 
            type="text" 
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Salvar</Button>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Excluir</Button>
        </DialogActions>
      </Dialog>
  );
}