// Adapted from https://material-ui.com/components/modal/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import IconButton from "@material-ui/core/IconButton";
import HelpIcon from '@material-ui/icons/Help';



function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">How to use</h2>
      <p id="simple-modal-description">
          <ol>
              <li>Select your city or drag and drop in the map</li>
              <li>Select the date for crime rates</li>
              <li>Select more cities to compare with your initial city</li>
          </ol>
      </p>
    </div>
  );

  return (
    <div>

    <IconButton onClick={handleOpen}>
        <HelpIcon></HelpIcon>
    </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
