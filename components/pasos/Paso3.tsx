'use client'
import { Box } from '@mui/material'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import '@/styles/styles.css';
import { CamposDropdown } from '../CamposDropdown';
import CamposAdjust from '../CamposAdjust';
import { FormControlLabel, FormControl } from '@mui/material';
import CheckboxItems from '../Checkboxitems';
import SwitchComponent from '../Switch';


const checkboxLabels = [
    "Certificados financieros",
    "Acciones",
    "Fondos cerrados",
    "Papeles comerciales",
    "Prestamo valores (mutuos)",
    "Operaciones a plazo (forwards)",
    "Préstamos de margen",
    "Fondos abiertos",
    "Bonos"
];

const checkboxOptions = [
    "Ahorros personales",
    "Inversiones anteriores",
    "Distribución de dividendos",
    "Herencia",
    "Pensiones",
    "Venta de activos",
    "Salario actual",
    "Otros",
];

const ActivosLiquidos = [
    "Cuenta corriente / ahorros",
    "Bonos",
    "Certificados financieros",
    "Fondos cerrados",
    "Acciones",
    "Papel comercial",
    "Fondos mutuos",
];


function Paso3() {
    const [vinculado, setVinculado] = useState(false);

    const handleVinculadoChange = (event: any) => {
        setVinculado(event.target.checked);
    };
    return (
        <>
            <Box sx={{ minWidth: 200, marginTop: '35px' }}>
                <h2 style={{ color: '#072f5a' }}>Clientes Profesionales</h2>

                <Box sx={{ flexGrow: 2, mt: 4 }}>
                    <p style={{ marginBottom: '30px' }}>Se considerarán "Clientes Profesionales" aquellos a quienes se presuma la experiencia, conocimientos y calificación necesarios para tomar sus propias decisiones de inversión y valorar correctamente los riesgos, de conformidad a lo establecido en el reglamento.</p>
                    <Grid container spacing={2}>
                        <CamposDropdown label={"Cantidad de operaciones promedio durante los últimos tres meses"} />
                        <CamposDropdown label={"Monto promedio a invertir anual"} />
                        <SwitchComponent label={"¿Ha laborado en cargos de dirección en el área de negocios o áreas afines de una entidad que opere en el sistema financiero, por un período de al menos dos (2) años?"} />
                        <SwitchComponent label={"¿Ha sido miembro del consejo de administración de una entidad que opere en el sistema financiero, por un período de al menos dos (2) años?"} />

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
                                label="¿Cuenta con la certificación de corredor de valores vigente o su equivalente de otro país?"
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
                                label="¿Ha laborado en cargos de dirección o gerencial en entidades financieras extranjeras u organismos multilaterales de los cuales la República Dominicana sea miembro por un período de al menos dos (2) años?"
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
                                label="¿Es o ha sido funcionario de las Superintendencias del Mercado de Valores, de Seguros o de Pensiones, del Banco Central de la República Dominicana o de la Junta Monetaria ?"
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
                                    <CamposAdjust lg={4} label="Nombre de la persona ocupa el cargo" />
                                    <CamposAdjust lg={2} label="Sector" />
                                    <CamposAdjust lg={2} label="Última fecha en el cargo" />
                                    <CamposAdjust lg={4} label="Especificar cargo e institución" />
                                </>
                            )
                        }


                    </Grid>
                </Box>

                <h2 style={{ color: '#072f5a', marginTop: '50px' }}>Perfil del Inversionista</h2>
                <Box sx={{ flexGrow: 2, mt: 4 }}>
                    <Grid container spacing={2}>
                        <CamposAdjust lg={4} label="¿Se considera usted un inversionista?" />
                        <CamposAdjust lg={8} label="En caso de estar expuesto a altas fluctuaciones de precios de sus inversiones en un período determinado ¿qué decisión tomaría?" />
                        <CamposAdjust lg={3} label={"Patrimonio total (o equivalente en USD)"} />
                        <CamposAdjust lg={3} label={"Moneda de inversión inicial"} />
                        <CamposAdjust lg={3} label={"Monto aproximado de inversión inicial"} />
                    </Grid>

                    <Grid container spacing={2} mt={1}>
                        <CamposAdjust lg={3.5} label={"Destino de los ingresos generados por inversiones"} />
                        <CamposAdjust lg={5} label={"¿Cuál de estos criterios se ajusta mejor a sus ideas de rentabilidad/riesgo?"} />
                        <CamposAdjust lg={3} label={"Ingresos mensuales (o equivalente en USD)"} />
                    </Grid>

                    <Grid container spacing={2} mt={1}>
                        <CamposAdjust lg={6} label={"Total activos en efectivo o inversiones en instrumentos financieros (o equivalente en USD)"} />
                        <CamposAdjust lg={3} label={"Rendimiento esperado por su inversión"} />
                    </Grid>

                    <Grid container spacing={2} mt={1}>
                        <CamposAdjust lg={6} label={"Capacidad de absorber pérdidas de capital (a mayor rentabilidad, mayor riesgo)"} />
                        <CamposAdjust lg={6} label={"¿Cuándo es lo más pronto que usted podría anticipar estar necesitando los fondos que desea invertir?"} />
                    </Grid>

                    <Grid container spacing={2} mt={1}>
                        <CamposAdjust lg={6} label={"A la hora de tomar una decisión de inversión ¿Cuál de los siguientes factores inciden más sobre esta?"} />
                    </Grid>

                </Box>

                <Box sx={{ flexGrow: 2, mt: 4, ml: 2 }}>



                    <Grid mt={2} container spacing={2}>
                        <p style={{ color: '#072f5a' }}><strong>Operaciones de valores y financieras que realiza y comprende (marcar las que está dispuesto a realizar con United Capital)</strong></p>
                        <CheckboxItems checkboxLabels={checkboxLabels} />
                    </Grid>

                    <Grid mt={2} container spacing={2}>
                        <p style={{ color: '#072f5a' }}><strong>Fuentes de ingresos u origen de los fondos</strong></p>
                        <CheckboxItems checkboxLabels={checkboxOptions} />
                    </Grid>

                    <Grid mt={2} container spacing={2}>
                        <p style={{ color: '#072f5a' }}><strong>Distribución activos líquidos</strong></p>
                        <CheckboxItems checkboxLabels={ActivosLiquidos} />
                    </Grid>
                </Box>


            </Box>
        </>
    )
}

export default Paso3