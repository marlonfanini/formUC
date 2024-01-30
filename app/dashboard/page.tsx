'use client'
import '@/styles/styles.css'
import ForumIcon from '@mui/icons-material/Forum';
import { Container, Grid, TextField, MenuItem, InputAdornment, Typography, Box, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Link from 'next/link';
import { useState } from 'react';



const page = () => {

    const [selectedIdentificationType, setSelectedIdentificationType] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');

    const handleIdentificationTypeChange = (event: any) => {
        setSelectedIdentificationType(event.target.value);
    };

    const handleIdentificationNumberChange = (event: any) => {
        setIdentificationNumber(event.target.value);
    };


    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" sx={{
                    fontWeight: 'bold',
                    color: '#00ADD8',
                    fontFamily: 'Montserrat, sans-serif'
                }}
                >
                    Te damos la bienvenida a United Capital Digital
                </Typography>
                <Typography paragraph sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    marginTop: '10px'
                }}>
                    Para continuar tu solicitud, necesitamos verificar si ya eres cliente nuestro con una identificación.
                </Typography>
                <Typography paragraph sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    marginTop: '5px'
                }}>
                    Si deseas abrir una cuenta como persona física, ingresa tu número de cédula o pasaporte.
                </Typography>
                <Typography paragraph sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    marginTop: '5px'
                }}>
                    Si deseas abrir una cuenta como persona jurídica, ingresa tu RNC o equivalente.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} mt={2}>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
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

                            }}
                            select
                            label="Selecciona una identificación"
                            value={selectedIdentificationType}
                            onChange={handleIdentificationTypeChange}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle sx={{ color: '#072f5a' }} /> {/* Ícono con estilo personalizado */}
                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value={'Cédula de identidad'}>Cédula de identidad</MenuItem>
                            <MenuItem value={'Cédula de Identidad y Electoral'}>Cédula de Identidad y Electoral</MenuItem>
                            <MenuItem value={'Pasaporte'}>Pasaporte</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>

                <Grid item xs={12} mt={2}>
                    <TextField
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
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
                        }}
                        fullWidth
                        label={`${selectedIdentificationType}`}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CreditCardIcon sx={{ color: '#072f5a' }} /> {/* Cambia el ícono según sea necesario */}
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12} mt={2}>
                    <Typography
                        paragraph
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            marginTop: '0px auto',
                            color: '#686868',
                            textAlign: 'center', // Añade esta línea para centrar el texto
                        }}
                    >
                        VERIFICACIÓN DE IDENTIDAD
                    </Typography>
                </Grid>


                <Grid item xs={12} mt={2} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ margin: '0px auto', textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            startIcon={<FingerprintIcon sx={{ fontSize: '3rem' }} />}
                            sx={{
                                fontWeight: 600,
                                color: '#fff',
                                border: '1.4px solid',
                                borderColor: '#007bff',
                                backgroundColor: '#007bff',
                                borderRadius: '10px',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '12px',
                                width: '175px',
                                height: '35px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#007bff',
                                    '& .MuiSvgIcon-root': {
                                        color: '#007bff',
                                    },
                                },
                            }}
                        >
                            Biométrica
                        </Button>
                    </Box>
                </Grid>


            </Box>
        </Container>
    )
}


export default page;