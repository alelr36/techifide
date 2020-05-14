import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Box, Grid, Popover, Typography } from '@material-ui/core';
import { updateTaskStatus } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import { MoveTaskDialog } from './MoveTaskDialog';
import './TaskItem.css';

const transitions = {
    pending: 'Move to PROGRESS',
    progress: 'Move to DONE',
    done: 'Can\'t move task',
}

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));  

const TaskItem = task => {
    const dispatch = useDispatch();

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setIsTransitioning(true);
    };

    const handleClose = () => {
        setIsTransitioning(false);
    };

    const handleProceed = () => {
        dispatch(updateTaskStatus(task));
        setIsTransitioning(false);
    }
  
    const isHovering = Boolean(anchorEl);

    const {
        title,
        description,
        status,
    } = task;

    const dialogProps = {
        isTransitioning, handleClose, handleProceed, title, status, transitions
    }
 
    return (
        <Grid item className={`task task-${status}`} onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Popover
            className={classes.popover}
            classes={{
            paper: classes.paper,
            }}
            open={isHovering}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            disableRestoreFocus
            >
                <Typography>{description}</Typography>
            </Popover>
            <MoveTaskDialog {...dialogProps} />
            <Box>
                {title} ({status})
            </Box>
            <Box className="task-actions">
                <Button variant="contained" color="primary" className="task-cta" disabled={status === 'done'} onClick={handleClickOpen}>{transitions[status]}</Button>
            </Box>
        </Grid>
    );
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.string
    })
};


export {
    TaskItem,
};