import React from 'react'
import { FormControlLabel, FormControl } from '@mui/material';
import Checkbox1 from './Checkbox';



function ChecboxGenerator({ label }: any) {
    return (
        <>
            <FormControlLabel
                control={<Checkbox1 />}
                label={label}
                sx={{
                    marginRight: '40px',
                    '& .MuiTypography-root': {
                        fontFamily: 'Montserrat, sans-serif',
                    }
                }}
            />
        </>
    )
}

export default ChecboxGenerator