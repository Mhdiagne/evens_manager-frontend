import React from 'react';

import { Autocomplete,InputAdornment,DialogContent,DialogActions,Dialog,TextField,Button } from '@mui/material';

import { FaPlus } from "react-icons/fa";
import animateur from '../assets/img/animateur.jpg';
import securite from '../assets/img/securite.jpeg';
import foto from '../assets/img/photographe2.jpg';
import deco from '../assets/img/decorate.jpg';
import art from '../assets/img/artiste.jpg';
import traiteur from '../assets/img/traiteurAfricain.jpeg';



const CreateEvents = (props) => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const options = [
      { label: 'Option 1', profile: animateur, name: 'Animateur' },
      { label: 'Option 2', profile: traiteur, name: 'Traiteur' },
      { label: 'Option 3', profile: foto, name: 'Photographe' },
      { label: 'Option 4', profile: securite, name: 'Securite' },
      { label: 'Option 5', profile: art, name: 'Artiste' },
      { label: 'Option 5', profile: deco, name: 'Decoratrice' },
     
      // Ajoutez autant d'options que nécessaire
    ];

  return (
    <React.Fragment >
      <Button id="new" onClick={handleClickOpen}>
        <FaPlus/>Create Event
      </Button>
      <Dialog id="all-form" maxWidth="lg" open={open} onClose={handleClose}>
      <div className ='kay-fi' ><h2>Créer votre evenement</h2></div>
        <DialogContent>
            
            <div >
                <div className="first-line">
                    <TextField  id="type-evenement" sx={{m:2,width:"355px"}}  label="Type d'Evenement" variant="outlined" required />
                    <TextField id="lieu" sx={{m:2, width:"360px"}} label="Lieu" variant="outlined" required />
                </div>
                <div className="second-line" >
                    <TextField type="Date" id="date-evenement"  sx={{m:2, width:"355px"}} variant="outlined" required />
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
                            getOptionLabel={(option) => option.name}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <div>
                                        <img src={option.profile} style={{ marginRight: '8px', width: '45px', height: '45px', borderRadius: '50%' }} />
                                        {option.name}
                                    </div>
                                </li>
                            )}
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
            <button id="valider" onClick={handleClose}>Enregistrer</button>
            <button id='annuler' onClick={handleClose}>Annuler</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default CreateEvents;