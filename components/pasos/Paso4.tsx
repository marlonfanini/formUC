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

function Paso4()  {
    const [vinculado, setVinculado] = useState(false);

    const handleVinculadoChange = (event: any) => {
      setVinculado(event.target.checked);
    };

  return (
    <>
         <h2 style={{ color: '#072f5a' }}>Foreign Account Tax Compliance Act (FATCA)</h2>
        <Box sx={{ flexGrow: 2, mt: 4 }}>
        <Grid container spacing={2}>
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
              label="¿Es residente de Estados Unidos?"
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
              label="¿Tiene nacionalidad de Estados Unidos?"
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


        <Grid item xs={12} sm={20}>
            <FormControlLabel
             required
              value="end"
              control={
                <Switch
                  color="primary"
                  checked={vinculado}
                  onChange={handleVinculadoChange}
                />
              }
              label="¿Es ciudadano de los Estados Unidos?"
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
        <Grid item xs={12} sm={20}>
            <FormControlLabel
             required
              value="end"
              control={
                <Switch
                  color="primary"
                  checked={vinculado}
                  onChange={handleVinculadoChange}
                />
              }
              label="¿Tiene identidad para el pago de impuestos (TIN o SSN) o tarjeta de identidad de Estados Unidos (Green Card)?"
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
          {
            vinculado && (
              <>
              
          <Grid item xs={12} sm={6} md={2} lg={4} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '10px',
                height: '55px'
              },
              '&:hover fieldset': {
                borderColor: '#007bff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ADD8',
              },
            },
            '& .MuiInputLabel-asterisk': {
              color: 'red',
            }
          }}>
            <FormControl required fullWidth>
              <InputLabel id="estado-civil-label">Nombre de la persona ocupa el cargo</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Nombre de la persona ocupa el cargo"
              >
                <MenuItem value={10}>Hombre</MenuItem>
                <MenuItem value={20}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12} sm={6} md={2} lg={2} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '10px',
                height: '55px'
              },
              '&:hover fieldset': {
                borderColor: '#007bff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ADD8',
              },
            },
            '& .MuiInputLabel-asterisk': {
              color: 'red',
            }
          }}>
            <FormControl required fullWidth>
              <InputLabel id="estado-civil-label">Sector</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Sector"
              >
                <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        
          <Grid item xs={12} sm={6} md={2} lg={2} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '10px',
                height: '55px'
              },
              '&:hover fieldset': {
                borderColor: '#007bff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ADD8',
              },
            },
            '& .MuiInputLabel-asterisk': {
              color: 'red',
            }
          }}>
            <FormControl required fullWidth>
              <InputLabel id="estado-civil-label">Última fecha en el cargo</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Última fecha en el cargo"
              >
                <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={4} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '10px',
                height: '55px'
              },
              '&:hover fieldset': {
                borderColor: '#007bff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ADD8',
              },
            },
            '& .MuiInputLabel-asterisk': {
              color: 'red', 
            }
          }}>
            <FormControl required fullWidth>
              <InputLabel id="estado-civil-label">Especificar cargo e institución</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Especificar cargo e institución"
              >
                <MenuItem value={10}>Hombre</MenuItem>
                <MenuItem value={20}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </Grid>

         
        
              </>
            )
          }
       

        </Grid>
        
      </Box>  
    </>
  )
}

export default Paso4