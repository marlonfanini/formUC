import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Montserrat } from 'next/font/google';
import '@/styles/styles.css';


const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
});



const TableReferencia = () => {
    return (
        <Box sx={{ overflowX: 'auto' }}>
            <TableContainer component={Paper} sx={{ boxShadow: 'none', margin: 'auto' }}>
                <Table aria-label="customized table" sx={{ minWidth: 200 }}>
                    <TableHead>
                        <TableRow className={montserrat.className} sx={{ backgroundColor: '#072f5f', '& th': { color: 'white', fontWeight: 'bold', textAlign: 'center' } }}>
                            <style>
                                {`
        @media (max-width: 600px) {
          .hide-on-small-screens {
            display: none;
          }
        }
      `}
                            </style>
                            <TableCell className={`hide-on-small-screens`} align="center" sx={{ borderRight: '5.1px solid #FFF', borderRadius: '11px', fontFamily: 'Montserrat, sans-serif' }}>Nombre</TableCell>
                            <TableCell align="center" sx={{ borderRight: '5.1px solid #FFF', borderRadius: '11px', fontFamily: 'Montserrat, sans-serif' }}>Télefono</TableCell>
                            <TableCell className={` hide-on-small-screens`} align="center" sx={{ borderRight: '5.1px solid #FFF', borderRadius: '11px', fontFamily: 'Montserrat, sans-serif' }}>Acciones</TableCell>
                            </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ fontFamily: 'Montserrat, sans-serif', }}>
                            <TableCell className={` hide-on-small-screens`} sx={{ fontFamily: 'Montserrat, sans-serif' , width: '55%' }} align="center">Marlon Fanini</TableCell>
                            <TableCell sx={{ fontFamily: 'Montserrat, sans-serif' }} align="center">809-321-3321</TableCell>
                            <TableCell sx={{ fontFamily: 'Montserrat, sans-serif' }} className={`hide-on-small-screens`} align="center">
                                <Button
                                    variant="contained"
                                    startIcon={<DeleteIcon />}
                                    sx={{
                                        height: '35px',
                                        width: '110px',
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 0,
                                        marginRight: '-1px',
                                        backgroundColor: '#072f5a',
                                        fontSize: '11px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        '&:hover': {
                                            backgroundColor: '#0C223F',
                                        },
                                    }}
                                >
                                    Eliminar
                                </Button>
                                <Button
                                    variant="contained"
                                    startIcon={<EditIcon />}
                                    sx={{
                                        height: '35px',
                                        width: '110px',
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                        borderTopRightRadius: '10px',
                                        borderBottomRightRadius: '10px',
                                        fontSize: '11px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        backgroundColor: '#00AABE',
                                        '&:hover': {
                                            backgroundColor: '#00AABE',
                                        },
                                    }}
                                >
                                    Modificar
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableReferencia