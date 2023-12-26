'use client'
import React, { useRef } from 'react';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#072f5a',
        },
        secondary: {
            main: '#072f5a',
        },
    },
});


const FilePicker = ({ onFileSelect }: any) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            onFileSelect(selectedFile);
        }
    };

    return (
        <div>
            <ThemeProvider theme={theme}>

                <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf" // Define accepted file types
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
                <Button style={{marginLeft: '20px'}} variant="contained" onClick={handleFileSelect}>
                    Select File
                </Button>
            </ThemeProvider>

        </div>
    );
};

export default FilePicker;
