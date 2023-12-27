import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';

const FormDialog = (props) => {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category,
  });
  
  const handleEditGame = () => { //edit card
    Axios.put("http://localhost:3002/edit", {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
    handleClose(); //close the formDialog
    document.location.reload();
  };

  const handleDeleteGame = () => { //delete card
    Axios.delete(`http://localhost:3002/delete/${editValues.id}`)
  }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => { //get id from input
    setEditValues(prevValue => ({
      ...prevValue,
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
          id="cost"
          label="Preço"
          defaultValue={props.cost}
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEditGame}>Salvar</Button>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDeleteGame}>Excluir</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;