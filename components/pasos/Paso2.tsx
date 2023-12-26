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

function Paso2()  {
    const [vinculado, setVinculado] = useState(false);

    const handleVinculadoChange = (event: any) => {
      setVinculado(event.target.checked);
    };

  return (
    <>
     <Box sx={{ minWidth: 200, marginTop: '35px' }}>
     <h2 style={{ color: '#072f5a' }}>Datos Laborales</h2>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2} mb={2} sx={{
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
            <TextField required fullWidth label="Estado laboral" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={6} mb={2} sx={{
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
            <TextField required fullWidth label="Nombre de la empresa" variant="outlined" />
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
              <InputLabel id="estado-civil-label">Cargo que ocupa</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Cargo que ocupa"
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
              <InputLabel id="estado-civil-label">Teléfono de oficina</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Teléfono de oficina"
              >
                <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        

          <Grid item xs={12} sm={6} md={2} lg={3} mb={2} sx={{
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
              <InputLabel id="estado-civil-label">Moneda de ingresos</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Cargo que ocupa"
              >
                <MenuItem value={10}>Hombre</MenuItem>
                <MenuItem value={20}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12} sm={6} md={2} lg={3} mb={2} sx={{
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
              <InputLabel id="estado-civil-label">Monto de ingresos mensuales</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Teléfono de oficina"
              >
                <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          


        </Grid>

      </Box>

      <h2 style={{ color: '#072f5a' }}>Dirección Laboral</h2>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={3} mb={2} sx={{
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
            <TextField required fullWidth label="País" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} mb={2} sx={{
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
            <TextField required fullWidth label="Provincia" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={3} mb={2} sx={{
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
              <InputLabel id="estado-civil-label">Municipio</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Municipio"
              >
                <MenuItem value={10}>Hombre</MenuItem>
                <MenuItem value={20}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12} sm={6} md={2} lg={3} mb={2} sx={{
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
              <InputLabel id="estado-civil-label">Calle</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Calle"
              >
                <MenuItem value={10}>Hombre</MenuItem>
                <MenuItem value={20}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12} sm={6} md={2} lg={1} mb={2} sx={{
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
              <InputLabel id="estado-civil-label">Número</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Número"
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
              <InputLabel id="estado-civil-label">Piso</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Piso"
              >
                <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          


        </Grid>
        
      </Box>

      <h2 style={{ color: '#072f5a' }}>Otros ingresos</h2>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <TableCuenta />
      </Box>
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '20px',
        marginBottom: '60px'
      }}>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            color: '#1976d2', 
            borderColor: '#1976d2', 
            '&:hover': {
              backgroundColor: '#bbdefb',
              borderColor: '#1976d2',
            },
            textTransform: 'none', 
          }}
        >
          Agregar otro ingreso
        </Button>
      </Box>

      <h2 style={{ color: '#072f5a' }}>Declaración Jurada de Persona Expuesta Políticamente (PEP)</h2>
        <Box sx={{ flexGrow: 2, mt: 4 }}>
        <p>Cualquier individuo que desempeña o ha desempeñado, durante los últimos tres (3) años altas funciones públicas por elección o nombramientos ejecutivos, en un país extranjero o en territorio nacional, incluyendo altos funcionarios de organizaciones internacionales. Incluye, pero no se limita a, jefes de estado o de gobierno, funcionarios gubernamentales, judiciales o militares de alta jerarquía, altos ejecutivos de empresas estatales o funcionarios, así como aquellos que determine el Comité Nacional de Lavado de Activos previa consulta con el Ministerio de la Administración Pública. Los cargos considerados PEP serán todos aquellos funcionarios obligados a presentar declaración jurada de bienes. Se asimilan todas aquellas personas que hayan desempeñado o desempeñen funciones o su equivalente para gobiernos extranjeros.</p>
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
              label="Desempeño o he desempeñado en los últimos 3 años altas funciones públicas, la cual me obliga a presentar una declaración jurada de bienes, de conformidad con la ley 311-14; o funciones equivalentes para gobiernos extranjeros."
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
              label="Mi cónyuge, pareja en unión libre o concubino cumple con algunas de las características enumeradas anteriormente."
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
              label="Me encuentro vinculado por parentesco, por consanguinidad o afinidad hasta el segundo grado, soy asociado o cercano a una persona que cumple las características enumeradas anteriormente."
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
      <h2 style={{ color: '#072f5a' }}>Firmas Autorizadas / Apoderados</h2>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <TableCuenta />
      </Box>
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '20px',
        marginBottom: '60px'
      }}>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            color: '#1976d2', 
            borderColor: '#1976d2', 
            '&:hover': {
              backgroundColor: '#bbdefb',
              borderColor: '#1976d2',
            },
            textTransform: 'none', 
          }}
        >
          AGREGAR OTRA FIRMA AUTORIZADA / APODERADO
        </Button>
      </Box>
      <h2 style={{ color: '#072f5a' }}>Referencia Comercial</h2>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <TableCuenta />
      </Box>
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '20px',
        marginBottom: '60px'
      }}>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            color: '#1976d2', 
            borderColor: '#1976d2', 
            '&:hover': {
              backgroundColor: '#bbdefb',
              borderColor: '#1976d2',
            },
            textTransform: 'none', 
          }}
        >
          AGREGAR OTRA FIRMA AUTORIZADA / APODERADO
        </Button>
      </Box>
     </Box>
    </>
  )
}

export default Paso2