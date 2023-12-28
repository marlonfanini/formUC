'use client'
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import '@/styles/styles.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ForumIcon from '@mui/icons-material/Forum';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



const theme = createTheme({
    palette: {
        primary: {
            main: '#072f5a',
        },
        secondary: {
            main: '#007bff',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
});

const LegalEntityCard = () => {
    const theme1 = useTheme();
    const isMobile = useMediaQuery(theme1.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={theme}>
            <div className='parent-container'>
                <div className='titulo1'>
                    <span style={{ color: 'grey' }}>Seleccione </span> 
                    <span style={{ color: '#00ADD8' }}>el tipo de cuenta </span>
                    <span style={{ color: 'grey' }}>que más se adapte a tus necesidades de inversión.</span>
                </div>
            </div>
            <Box
                className='container3'
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh',
                    width: '90%',
                    margin: '0 auto', // Centra el contenido en móviles
                    gap: 4, // Espaciado entre tarjetas
                    paddingRight: 100
                }}
            >
                {/* Card de Persona Jurídica */}
                <Card
                    className="card-hover-animation"
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        backgroundColor: '#F3F7F9',
                        width: isMobile ? '100%' : 1000, // Ajusta el ancho de las tarjetas
                        mb: 2, // Añade margen inferior en móviles
                        borderRadius: '30px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                        <AccountBalanceIcon color="secondary" sx={{ fontSize: 150 }} />
                    </Box>
                    <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h5" component="div" sx={{
                            fontWeight: 'bold',
                            color: '#072f5a',
                            marginBottom: '18px'
                        }}>
                            Persona jurídica
                        </Typography>
                        <Typography variant="body2">
                            Son las entidades identificadas con una denominación social que se constituyen de
                            acuerdo a las disposiciones de la ley sobre <Typography sx={{ color: '#072f5a', fontWeight: 700 }} variant="body2">Sociedades Comerciales y Empresas
                                Individuales de Responsabilidad Limitada </Typography> establecidas en la ley No. 479-08.
                        </Typography>

                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Button
                                variant="contained"
                                startIcon={<ForumIcon sx={{ fontSize: '3rem' }} />}
                                sx={{
                                    fontWeight: 600,
                                    color: '#007bff',
                                    border: '3px solid',
                                    borderColor: '#007bff',
                                    backgroundColor: 'transparent',
                                    borderRadius: '10px',
                                    fontSize: '10px',
                                    '&:hover': {
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        '& .MuiSvgIcon-root': {
                                            color: '#fff',
                                        },
                                    },
                                }}
                            >
                                Abrir Cuenta
                            </Button>
                            <Link href="#" style={{ color: '#007bff' }} passHref>
                                <Typography component="a" variant="body2" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                                    Conoce los Requisitos
                                </Typography>
                            </Link>
                        </Box>
                    </CardContent>
                </Card>

                {/* Card de Persona Física */}
                <Card
                    className="card-hover-animation"
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        width: isMobile ? '100%' : 1000, // Ajusta el ancho de las tarjetas
                        mb: 2,
                        backgroundColor: '#F3F7F9',
                        paddingTop: 2.7, 
                        borderRadius: '30px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                        <SupervisorAccountIcon color="secondary" sx={{ fontSize: 150 }} />
                    </Box>
                    <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h5" component="div" sx={{
                            fontWeight: 'bold',
                            color: '#072f5a',
                            marginBottom: '18px'
                        }}>
                            Persona física
                        </Typography>
                        <Typography variant="body2">
                            <Typography sx={{ color: '#072f5a', fontWeight: 700 }} variant="body2">Es una cuenta para profesionales independientes</Typography> (contadores, abogados, ingenieros, entre otros) o personas con un oficio, que realizan actividades generadoras de obligaciones. Se identifican con su nombre y apellido.
                        </Typography>

                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Button
                                variant="contained"
                                startIcon={<ForumIcon sx={{ fontSize: '3rem' }} />}
                                sx={{
                                    fontWeight: 600,
                                    color: '#007bff',
                                    border: '3px solid',
                                    borderColor: '#007bff',
                                    backgroundColor: 'transparent',
                                    borderRadius: '10px',
                                    fontSize: '10px',
                                    '&:hover': {
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        '& .MuiSvgIcon-root': {
                                            color: '#fff',
                                        },
                                    },
                                }}
                            >
                                Abrir Cuenta
                            </Button>
                            <Link href="#" style={{ color: '#007bff' }} passHref>
                                <Typography component="a" variant="body2" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                                    Conoce los Requisitos
                                </Typography>
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default LegalEntityCard;
