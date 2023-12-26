import CropFreeIcon from '@mui/icons-material/CropFree';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const styles = {
    card: {
        backgroundColor: '#F7F8F9',
        border: '1px solid #ccc',
        borderRadius: '15px',
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto'
    },
    title: {
        color: '#000',
        textAlign: 'center',
        marginBottom: '20px'
    },
    profile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },
    profileIcon: {
        backgroundColor: '#f5f5f5',
    },
    profileText: {
        marginLeft: '10px',
        fontWeight: 'bold',
        fontSize: '14.5px',
        color: 'grey'
    },
    nonProfessionalText: {
        color: '#00ADD8',
        marginTop: '5px',
    },
    identityIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '60px',
        color: '#00ADD8',
    },
    iconContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },
    cropIcon: {
        fontSize: '110px',
        color: '#00ADD8',
    }
};

// Componente de React
function Perfil() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h2 style={{ color: '#072f5a' }} >Resultado del Perfil del inversionista</h2>
                    <div style={styles.card}>
                        <div style={styles.iconContainer}>
                            <CropFreeIcon style={styles.cropIcon} />
                            <PermIdentityIcon style={styles.identityIcon} />
                        </div>
                        <div style={styles.profile}>
                            <div style={styles.profileText}>
                                <p style={styles.profileText}>
                                    Tu perfil de inversionista es: <strong style={{ color: '#00ADD8' }}>Conservador</strong>
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={styles.nonProfessionalText}>No Profesional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center',  textAlign: 'justify', padding: '20px 40px 0px 40px' }}>
                <p>
                    En virtud de las informaciones provistas en el cuestionario, tales como tu nivel académico, conocimiento como inversionista en el Mercado de Valores, Ingresos anuales, total de activos líquidos, patrimonio total, destino de los ingresos generados por tus inversiones, tus objetivos de inversión y tolerancia al riesgo, concluimos que posees un <strong style={{color: '#00ADD8'}}>Perfil de Inversionista Conservador</strong>, debido a que tu objetivo es preservar el capital invertido, generando rentas moderadas. Este tipo de inversionistas se caracteriza por tener baja tolerancia al riesgo y valorar mucho la seguridad. Escoge instrumentos de inversión que le den certeza de que no perderá parte o todo tu capital. Realiza operaciones de inversión que aunque no reporten gran rentabilidad, si representa estabilidad y seguridad y no se ven afectadas significativamente por el movimiento de los instrumentos.
                </p>
            </div>

        </>
    );
};

export default Perfil;
