import React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function Nonfictionals() {
    const [open, setOpen] = React.useState(true);
  return (
    <div className='justify-items-center w-full grid'>
        <div className='text-xl justify-start w-full ml-52'>
         Notification
        </div><br />
     <Box sx={{ width: '100%' ,paddingInline:'52px'}}>
      <Collapse in={open}>
        <Alert
        color='success'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(true);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
    </Box>
    <Box sx={{ width: '100%' ,paddingInline:'52px'}}>
      <Collapse in={open}>
        <Alert
        color='info'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(true);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
    </Box>
    <Box sx={{ width: '100%' ,paddingInline:'52px'}}>
      <Collapse in={open}>
        <Alert
        color='warning'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(true);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
    </Box>
    <Box sx={{ width: '100%' ,paddingInline:'52px'}}>
      <Collapse in={open}>
        <Alert
        color='error'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(true);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
    </Box>
    </div>
  )
}

