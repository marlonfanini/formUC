import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';



export function CamposDropdown({ label }: any) {
  return (
    <Grid item xs={12} sm={8} md={4}  mb={2}  sx={{
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
        <FormControl required fullWidth>
          <InputLabel id="estado-civil-label">{label}</InputLabel>
          <Select
            labelId="estado-civil-label"
            id="estado-civil-select"
            label={`${label}`}
          >
            {/* <MenuItem value={10}>Soltero</MenuItem>
            <MenuItem value={20}>Casado</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
  );
}
