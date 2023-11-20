import React from 'react';

import { Autocomplete,InputAdornment,DialogContent,DialogActions,Dialog,TextField,Button } from '@mui/material';

import { FaPlus } from "react-icons/fa";


const CreateEvents = (props) => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        // Ajoutez autant d'options que nécessaire
      ];

  return (
    <React.Fragment >
      <Button id="new" onClick={handleClickOpen}>
        <FaPlus/>Create Event
      </Button>
      <Dialog className="all-form" maxWidth="lg" open={open} onClose={handleClose}>
        <DialogContent>
            <center><h2>Créer votre evenement</h2></center>
            <div >
                <div className="first-line">
                    <TextField  id="type-evenement" sx={{m:2,width:"355px"}}  label="Type d'Evenement" variant="outlined" required />
                    <TextField id="lieu" sx={{m:2, width:"360px"}} label="Lieu" variant="outlined" required />
                </div>
                <div className="second-line" >
                    <TextField type="date" id="date-evenement" label="" sx={{m:2, width:"355px"}} variant="outlined" required />
                    <TextField id="duree" sx={{m:2, width:"360px"}} label="Duree" variant="outlined" 
                    InputProps={{endAdornment: <InputAdornment position="end">jours</InputAdornment>,}} required />
                </div>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    sx={{m:2, width:"750px"}}
                    rows={4}
                    variant="outlined"
                    required
                />
                <Autocomplete
                multiple
                sx={{m:2, width:"750px"}}
                id="ajout-pretataires"
                options={options}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    variant="outlined"
                    label="Ajouter vos prestataires"
                    />
                )}
                required
                />
            </div>
        </DialogContent>
        <DialogActions sx={{m:2}}>
            <Button variant="contained" onClick={handleClose}>Enregistrer</Button>
            <Button variant="outlined" color="error" onClick={handleClose}>Annuler</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default CreateEvents;