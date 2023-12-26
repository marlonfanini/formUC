import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
});

const TableCuenta = () => {
  
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
                <TableCell  className={`${montserrat.className} hide-on-small-screens`} align="center" sx={{ borderRight: '20px solid #FFF' }}>Tipo de Cuenta</TableCell>
                <TableCell className={montserrat.className} align="center" sx={{ borderRight: '20px solid #FFF' }}>Titular de la cuenta</TableCell>

                <TableCell className={`${montserrat.className} hide-on-small-screens`} align="center" sx={{ borderRight: '20px solid #FFF' }}>Número de cuenta</TableCell>
                <TableCell className={`${montserrat.className} hide-on-small-screens`} align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell  className={`${montserrat.className} hide-on-small-screens`} align="center">Ahorros</TableCell>
                <TableCell className={montserrat.className} align="center">Guillermo de Ockham</TableCell>
                <TableCell className={`${montserrat.className} hide-on-small-screens`} align="center">098 765 4321</TableCell>
                <TableCell className={`${montserrat.className} hide-on-small-screens`} align="center">
                  <Button
                    className={montserrat.className}
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    sx={{
                      height: '35px',
                      width: '131px',
                      borderTopLeftRadius: '10px',
                      borderBottomLeftRadius: '10px',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      marginRight: '-1px',
                      backgroundColor: '#072f5a',
                      '&:hover': {
                        backgroundColor: '#0C223F',
                      },
                    }}
                  >
                    Eliminar
                  </Button>
                  <Button
                    className={montserrat.className}
                    variant="contained"
                    startIcon={<EditIcon />}
                    sx={{
                      height: '35px',
                      width: '135px',
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px',
                      backgroundColor: '#00ADD',
                      '&:hover': {
                        backgroundColor: '#007bff',
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
    );
  };
  
  export default TableCuenta;
