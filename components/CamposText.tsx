import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

export function CamposText({ label }: any)  {
  return (
    <Grid item xs={12} sm={6} md={3} lg={4} mb={2} sx={{
      '& .MuiOutlinedInput-root': {
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
      '& .MuiInputLabel-asterisk': {
        color: 'red',
      }
    }}>
      <TextField required fullWidth label={`${label}`} variant="outlined" />
    </Grid>
  )
}

export default CamposText