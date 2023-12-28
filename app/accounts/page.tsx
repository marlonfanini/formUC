'use client'
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import '@/styles/styles.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SyncIcon from '@mui/icons-material/Sync';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



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


const AccountCard = () => {
    const theme1 = useTheme();
    const isMobile = useMediaQuery(theme1.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={theme}>
            <div className='parent-container1'>
                <div className='titulo10'>
                    <span>Mis cuentas</span>
                    <Button
                        variant="outlined"
                        startIcon={<AddCircleOutlineIcon sx={{ color: '#072f5a' }} />}
                        sx={{
                            color: '#072f5a',
                            borderColor: '#072f5a',
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '13px',
                            borderRadius: '10px',
                            '&:hover': {
                                color: '#fff',
                                borderColor: 'transparent',
                                backgroundColor: '#00ADD8',
                                '& .MuiSvgIcon-root': {
                                    color: '#fff',
                                },
                            },
                            textTransform: 'none',
                        }}
                    >
                        Crear nueva Cuenta
                    </Button>                
                    </div>
            </div>
            <Box
                className='container3'
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'left',
                    alignItems: 'center',
                    minHeight: '30vh',
                    width: '90%',
                    gap: 5,
                    paddingRight: 100
                }}
            >
                <Card
                    className="card-hover-animation"
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        backgroundColor: '#F3F7F9',
                        width: isMobile ? '100%' : 450,
                        mb: 2,
                        borderRadius: '30px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                        <PersonIcon color="secondary" sx={{ fontSize: 110 }} />
                    </Box>
                    <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h5" component="div" sx={{
                            fontWeight: 'bold',
                            color: '#072f5a',
                            marginBottom: '7px',
                            fontSize: '20px'
                        }}>
                            Cuenta Individual
                        </Typography>
                        <Typography variant="body2">
                            Wilber Jose Tapia
                        </Typography>

                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1, borderRadius: '30px' }}>
                            <Button
                                variant="contained"
                                startIcon={<SyncIcon sx={{ fontSize: '3rem' }} />}
                                sx={{
                                    fontWeight: 600,
                                    color: '#007bff',
                                    border: '2px solid',
                                    borderColor: '#007bff',
                                    backgroundColor: 'transparent',
                                    borderRadius: '10px',
                                    fontSize: '9.4px',
                                    '&:hover': {
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        '& .MuiSvgIcon-root': {
                                            color: '#fff',
                                        },
                                    },
                                }}
                            >
                                Actualizar cuenta
                            </Button>

                        </Box>
                    </CardContent>
                </Card>
                <Card
                    className="card-hover-animation"
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        backgroundColor: '#F3F7F9',
                        width: isMobile ? '100%' : 450,
                        mb: 2,
                        borderRadius: '30px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                        <GroupIcon color="secondary" sx={{ fontSize: 110 }} />
                    </Box>
                    <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h5" component="div" sx={{
                            fontWeight: 'bold',
                            color: '#072f5a',
                            marginBottom: '7px',
                            fontSize: '20px'
                        }}>
                            Cuenta Mancomunada
                        </Typography>
                        <Typography variant="body2">
                            Wilber Jose Tapia
                        </Typography>

                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1, borderRadius: '30px' }}>
                            <Button
                                variant="contained"
                                startIcon={<SyncIcon sx={{ fontSize: '3rem' }} />}
                                sx={{
                                    fontWeight: 600,
                                    color: '#007bff',
                                    border: '2px solid',
                                    borderColor: '#007bff',
                                    backgroundColor: 'transparent',
                                    borderRadius: '10px',
                                    fontSize: '9.4px',
                                    '&:hover': {
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        '& .MuiSvgIcon-root': {
                                            color: '#fff',
                                        },
                                    },
                                }}
                            >
                                Actualizar cuenta
                            </Button>

                        </Box>
                    </CardContent>
                </Card>


            </Box>
            <Box
                className='container3'
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'left',
                    alignItems: 'center',
                    minHeight: '5vh',
                    width: '90%',
                    gap: 5,
                    paddingRight: 100
                }}
            >
                <Card
                    className="card-hover-animation"
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        backgroundColor: '#F3F7F9',
                        width: isMobile ? '100%' : 450,
                        mb: 2,
                        borderRadius: '30px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                        <PersonIcon color="secondary" sx={{ fontSize: 110 }} />
                    </Box>
                    <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h5" component="div" sx={{
                            fontWeight: 'bold',
                            color: '#072f5a',
                            marginBottom: '7px',
                            fontSize: '20px'
                        }}>
                            Cuenta Individual
                        </Typography>
                        <Typography variant="body2">
                            Wilber Jose Tapia
                        </Typography>

                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1, borderRadius: '30px' }}>
                            <Button
                                variant="contained"
                                startIcon={<SyncIcon sx={{ fontSize: '3rem' }} />}
                                sx={{
                                    fontWeight: 600,
                                    color: '#007bff',
                                    border: '2px solid',
                                    borderColor: '#007bff',
                                    backgroundColor: 'transparent',
                                    borderRadius: '10px',
                                    fontSize: '9.4px',
                                    '&:hover': {
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        '& .MuiSvgIcon-root': {
                                            color: '#fff',
                                        },
                                    },
                                }}
                            >
                                Actualizar cuenta
                            </Button>

                        </Box>
                    </CardContent>
                </Card>



            </Box>
        </ThemeProvider>
    );
};

export default AccountCard;
