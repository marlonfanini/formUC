'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { Button, FormControlLabel } from '@mui/material';
import { CamposDropdown } from '@/components/CamposDropdown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import '@/styles/styles.css';
import CamposText from '@/components/CamposText';
import TableCuenta from '@/components/Table';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Popup from '../popup';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CamposAdjust from '../CamposAdjust';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Camposlg from '../Camposlg';
import { ChakraProvider } from "@chakra-ui/react";
import { MuiPhone } from '../MuiPhone';






const style = {
  position: 'fixed' as 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 70,
  p: 4,
  backdropFilter: 'blur(12px)',
};


const Paso1 = () => {

  const [vinculado, setVinculado] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const handlePhoneChange = (newPhone: string) => {
    setPhone(newPhone);
  };




  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const handleVinculadoChange = (event: any) => {
    setVinculado(event.target.checked);
  };


  const inputStyle = {
    height: '200px',
    padding: '0 14px',
  };

  const flagStyle = {
    width: '30px',
    height: '30px',
  };

  const countrySelectStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <Box sx={{ minWidth: 200, marginTop: '35px' }}>
        <FormControl
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                height: '51px',
                padding: '1px'

              },
              '&:hover fieldset': {
                borderColor: '#007bff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ADD8',
              },
            },
            '& .MuiFormLabel-asterisk.MuiInputLabel-asterisk': {
              color: 'red',
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Tipo de cuenta</InputLabel>
          <Select
            style={{ width: '250px' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Tipo de cuenta"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle sx={{ color: '#007bff' }} />
              </InputAdornment>
            }
          >
            <MenuItem value={10}>Individual</MenuItem>
            <MenuItem value={20}>Mancomunada</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Datos Básicos */}
      <h2 style={{ color: '#072f5a' }}>Datos Básicos</h2>
      <Box sx={{ flexGrow: 2, mt: 4, }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={4} mb={2} sx={{
            marginBottom: '55px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                height: '51px',
                padding: '1px'

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
            <TextField required fullWidth label="Nombre" sx={{ height: '20px' }}
              variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                height: '51px',
                padding: '1px'

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
            <TextField required fullWidth label="Apellidos" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                height: '51px',
                padding: '1px'
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
              <InputLabel id="estado-civil-label">Sexo</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Sexo"
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
                borderRadius: '100px',
                height: '51px',
                padding: '1px'
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
              <InputLabel id="estado-civil-label">Estado civil</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Estado civil"
              >
                <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <CamposDropdown label={'Nivel académico'} />
          <CamposDropdown label={'Ocupación'} />
          <CamposDropdown label={'Profesión'} />
          <CamposDropdown label={'Sector económico'} />
          <CamposDropdown label={'Actividad económica'} />
          <CamposDropdown label={'Propósito del servicio'} />

          <Grid item xs={12} sm={3}>
            <FormControlLabel
              value="end"
              control={<Switch color="primary" />}
              label="¿Es empleado de United Capital?"
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
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              value="end"
              control={
                <Switch
                  color="primary"
                  checked={vinculado}
                  onChange={handleVinculadoChange}
                />
              }
              label="¿Está vinculado con United Capital?"
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
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#9CA6AC',
                          borderRadius: '100px',
                          padding: '1px',
                          height: '51px'
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
                    }}
                    label="Detalles de vinculación"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <HelpOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#9CA6AC',
                          borderRadius: '100px',
                          height: '51px',
                          padding: '1px'
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
                    }}
                    label="Nombre y apellido de la persona vinculada"
                    variant="outlined"
                  />
                </Grid>
              </>
            )
          }



        </Grid>
      </Box>

      {/* Datos de identidad  */}
      <h2 style={{ color: '#072f5a', marginTop: '30px' }}>Datos de Identidad</h2>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <Grid container spacing={2}>

          <CamposDropdown label={'Tipo de documento de identificación'} />
          <CamposDropdown label={'Número de identificación'} />
          <CamposDropdown label={'Fecha de nacimiento'} />

          <Grid item xs={12} sm={6} md={2} lg={3} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                padding: '1px',
                height: '51px'
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
              <InputLabel id="estado-civil-label">Lugar de nacimiento</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="Lugar de nacimiento"
              >
                {/* <MenuItem value={10}>Hombre</MenuItem>
                <MenuItem value={20}>Mujer</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12} sm={6} md={2} lg={3} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                height: '51px',
                borderRadius: '100px',
                padding: '1px',

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
              <InputLabel id="estado-civil-label">País de residencia</InputLabel>
              <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label="País de residencia"
              >
                {/* <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                height: '51px',
                borderRadius: '100px',
                padding: '1px',

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
            <FormControlLabel
              value="end"
              control={
                <Switch
                  color="primary"
                  checked={vinculado}
                  onChange={handleVinculadoChange}
                  onClick={openPopup}
                />
              }
              label="¿Tiene segunda nacionalidad?"

              labelPlacement="start"
              sx={{
                marginLeft: 'auto',
                '& .MuiTypography-root': {
                  color: '#283739',
                  fontFamily: 'Montserrat, sans-serif',
                  borderRadius: '100px',
                  padding: '1px',
                }
              }}
            />
            {/* <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal> */}
          </Grid>
          {
            vinculado && (
              <>
                {isPopupOpen && <Popup onClose={closePopup} />}
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#9CA6AC',
                          borderRadius: '100px',
                          height: '51px',
                          padding: '1px'

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
                    }}
                    label="País de la segunda nacionalidad"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <HelpOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </>
            )
          }



        </Grid>
      </Box >

      {/* Datos de Contacto  */}
      < h2 style={{ color: '#072f5a', marginTop: '30px' }
      }> Datos de Contacto</h2 >

      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <Box sx={{ flexGrow: 2, mt: 4 }}>
          <Grid container spacing={4}>
           
            {/* Contenedor para PhoneInput */}
            <Grid item xs={12} sm={6} md={2} lg={4} mb={2} sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#9CA6AC',
                  borderRadius: '100px',
                  height: '50px',
                  padding: '1px'
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
              <MuiPhone value={phone} onChange={handlePhoneChange} />
            </Grid>

          </Grid>
        </Box>
      </Box>

      {/* Dirección de Residencia  */}
      <h2 style={{ color: '#072f5a', marginTop: '30px' }}>Dirección de Residencia</h2>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} md={3} lg={6} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                height: '51px',
                padding: '1px'
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
            <TextField required fullWidth label="Calle" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                height: '51px',
                padding: '1px'
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
            <TextField required fullWidth label="Número" variant="outlined" />
          </Grid>


          <Grid item xs={12} sm={6} md={2} lg={4} mb={2} sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                padding: '1px',
                height: '51px'
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
            <TextField required fullWidth label="Edifcio No." variant="outlined" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <CamposDropdown label={'Provincia'} />
          <CamposDropdown label={'Municipio'} />
          <CamposDropdown label={'Sector'} />
        </Grid>
      </Box>

      <h2 style={{ color: '#072f5a', marginTop: '30px' }}>Cuentas Bancarias</h2>
      <p>Debe de agregar al menos una cuenta bancaria en pesos o dólares para poder continuar la solicitud de la cuenta.</p>
      <Box sx={{ flexGrow: 2, mt: 4 }}>
        <TableCuenta />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon sx={{ color: '#072f5a' }} />}
          sx={{
            color: '#072f5a',
            borderColor: '#072f5a',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            borderRadius: '10px',
            '&:hover': {
              color: '#fff',
              borderColor: 'transparent',
              backgroundColor: '#F9A01B',
              '& .MuiSvgIcon-root': {
                color: '#fff',
              },
            },
            textTransform: 'none',
          }}
        >
          AGREGAR NUEVA CUENTA BANCARIA
        </Button>
      </Box>

    </>
  )
}

export default Paso1