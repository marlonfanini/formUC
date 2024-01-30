import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'


const Camposlg = ({ lg, label}: any) => {
  return (
    <Grid item xs={12} sm={6} md={2} lg={lg} mb={2} sx={{
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9CA6AC',
                borderRadius: '100px',
                height: '50px',
                padding: '1px'
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
        <FormControl required fullWidth>
            <InputLabel id="estado-civil-label">{label}</InputLabel>
            <Select
                labelId="estado-civil-label"
                id="estado-civil-select"
                label={`${label}`}
            >
                <MenuItem value={10}>Soltero</MenuItem>
                <MenuItem value={20}>Casado</MenuItem>
            </Select>
        </FormControl>
    </Grid>
  )
}

export default Camposlg;