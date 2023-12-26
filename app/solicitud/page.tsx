'use client'
import React, { useState } from 'react'
import '@/styles/styles.css'
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import '@/styles/styles.css';
import { Checkbox, FormGroup, FormLabel } from '@mui/material';
import { FormControlLabel, FormControl } from '@mui/material';
import ChecboxGenerator from '@/components/ChecboxGenerator';
import { Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilePicker from '@/components/File';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const checkboxLabels = [
    "Deseo enviar estos requisitos por correo",
    "Deseo completar estos requerimientos ahora",
];

const allowedExtensions = ['xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx', 'pdf', 'jpg', 'jpeg', 'png'];
const maxFileSize = 51 * 1024 * 1024;


function page() {
    const [selectedFile, setSelectedFile] = useState<HTMLInputElement | null>(null);


    const handleFileSelect = (file: any) => {
        setSelectedFile(file);
    };

    return (
        <div className='container'>
            <div className='titulo'>
                ¡Marlon Fanini, has completado tu solicitud!
            </div>
            <p>Los documentos requeridos puede ser cargados en esta sección o enviados por correo electrónico.</p>
            <div className="advertencia" >
                Para agilizar el proceso es importante el enviar verifiques que los mismos sean correctos.
            </div>
            <Grid item xs={12} sm={20} mt={3}>
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
                    label="¿Deseas utilizar firma electrónica avanzada?"
                    labelPlacement="start"
                    sx={{
                        marginLeft: 'auto',
                        '& .MuiTypography-root': {
                            color: '#072f5a',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600
                        }
                    }}
                />
            </Grid>
            <Box sx={{ flexGrow: 2, mt: 4, ml: 2 }}>

                <Grid container spacing={2}>
                    <p style={{ color: '#072f5a' }}><strong style={{ color: '#072f5a', fontWeight: 600 }}>¿Cómo quisieras completar esta solicitud?</strong></p>
                    <Grid item xs={12} mt={0}>
                        <FormGroup row >
                            {checkboxLabels.map((label, index) => (
                                <ChecboxGenerator key={index} label={label} />
                            ))}
                        </FormGroup>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 2, mt: 7 }}>
                <h2 style={{ color: '#072f5a', fontSize: '19px' }}>Adjuntar Documentación</h2>
            </Box>
            <Box sx={{ flexGrow: 2, mt: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} mt={0}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#072f5a' }}>
                            <KeyboardArrowRightIcon />
                            <p><strong>Archivos permitidos:</strong> xls, xlsx, doc, docx, ppt, pptx, pdf, jpg, jpeg, png</p>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#072f5a' }}>
                            <KeyboardArrowRightIcon />
                            <p><strong>Tamaño permitido:</strong> {maxFileSize / 1024 / 1024} MB por archivo.</p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} mt={0}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#072f5a' }}>
                            <KeyboardDoubleArrowRightIcon />
                            <h2 style={{ color: '#072f5a', fontSize: '17px', fontWeight: 400 }}>Pasaporte vigente</h2>
                        </Box>
                        <FilePicker onFileSelect={handleFileSelect} />
                        {selectedFile && (
                            <div>
                                <p>Selected File: {selectedFile.name}</p>
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} mt={0}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#072f5a' }}>
                            <KeyboardDoubleArrowRightIcon />
                            <h2 style={{ color: '#072f5a', fontSize: '17px', fontWeight: 400 }}>Referencia bancaria</h2>
                        </Box>

                        <FilePicker onFileSelect={handleFileSelect} />
                        {selectedFile && (
                            <div>
                                <p>Selected File: {selectedFile.name}</p>
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} mt={0}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#072f5a' }}>
                            <KeyboardDoubleArrowRightIcon />
                            <h2 style={{ color: '#072f5a', fontSize: '17px', fontWeight: 400 }}>Estado de cuenta (últimos tres meses)</h2>
                        </Box>

                        <FilePicker onFileSelect={handleFileSelect} />
                        {selectedFile && (
                            <div>
                                <p>Selected File: {selectedFile.name}</p>
                            </div>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default page;