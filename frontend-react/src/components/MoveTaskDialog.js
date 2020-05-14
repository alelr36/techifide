import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box, Typography, Dialog, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

const MoveTaskDialog = ({isTransitioning, handleClose, handleProceed, title, status, transitions}) => (
    <Dialog open={isTransitioning} onClose={handleClose}>
        <DialogContent>
        <DialogContentText>
            <Typography>You are transitinoing the task <Box fontWeight="fontWeightBold">{title}</Box></Typography>
            <Typography>{transitions[status]}?</Typography>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleProceed}>Proceed</Button>
        </DialogActions>
    </Dialog>
);

MoveTaskDialog.propTypes = {
    isTransitioning: PropTypes.bool,
    handleClose: PropTypes.func,
    handleProceed: PropTypes.func,
    title: PropTypes.string,
    status: PropTypes.string,
    transitions: PropTypes.object
};

export {
    MoveTaskDialog,
}