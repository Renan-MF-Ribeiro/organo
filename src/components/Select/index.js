import './SelectForm.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectForm = (params)=>{
    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-label">Time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={params.value}
              label={params.label}
              onChange={evento=>params.onChangeSelect(evento.target.value)}
            >
                {params.list.map(time => <MenuItem key={time.title} value={time.title}>{time.title}</MenuItem> )}
              
            </Select>
          </FormControl>
        </Box>
      );
}

export default SelectForm