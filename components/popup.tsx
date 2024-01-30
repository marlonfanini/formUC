import '@/styles/styles.css';
import Paso4 from './pasos/Paso4';
import { Button } from '@mui/material';
import { Montserrat } from 'next/font/google';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
});




const Popup = ({ onClose }: any) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <Paso4/>
        <Button
                    className={montserrat.className}
                    variant="contained"
                    endIcon={ <ThumbUpIcon/> }
                    onClick={onClose}
                    sx={{
                      marginTop: '15px',
                      height: '30px',
                      fontSize: '13px',
                      width: '127px',
                      borderRadius: '10px',
                      backgroundColor: '#072f5a',
                      '&:hover': {
                        backgroundColor: '#0C223F',
                      },
                    }}
                  >
                    Aceptar
                  </Button>
      </div>
    </div>
  );
};

export default Popup;