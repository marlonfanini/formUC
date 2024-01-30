'use client'
import { Box } from '@mui/material'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { Button, FormControlLabel } from '@mui/material';
import '@/styles/styles.css';
import TableCuenta from '@/components/Table';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const SwitchComponent = ({label} : any) => {
  return (
    <Grid item xs={12} sm={20}>
    <FormControlLabel
     required
      value="end"
      control={
        <Switch
          color="primary"
        //   checked={vinculado}
        //   onChange={handleVinculadoChange}
        />
      }
      label={`${label}`}
      labelPlacement="start"
      sx={{
        marginLeft: 'auto',
        '& .MuiTypography-root': {
            color: '#283739',
            fontFamily: 'Montserrat, sans-serif', 
        }
    }}
    />
</Grid>
    )
}

export default SwitchComponent