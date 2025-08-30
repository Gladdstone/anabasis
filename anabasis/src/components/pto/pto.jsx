import React, { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Stack
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

function Pto() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Request PTO
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" mb={2}>
            PTO Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField label="Name" name="name" fullWidth required />
              <DatePicker label="Basic date picker" />
              <TextField label="Message" name="message" multiline rows={4} fullWidth />

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" variant="contained">Submit</Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Pto;

