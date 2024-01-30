import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';



export function CamposDropdown({ label }: any) {
  return (
    <Grid item xs={12} sm={8} md={4}  mb={2}  sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '200px',

          '& fieldset': {
            borderColor: '#9CA6AC',
            borderRadius: '210px',
            height: '51px',
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
            inputProps={{ style: { fontSize: '8px' } }} // Ajusta el tamaño de fuente según tus necesidades

          >
            {/* <MenuItem value={10}>Soltero</MenuItem>
            <MenuItem value={20}>Casado</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
  );
}
