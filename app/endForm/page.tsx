'use client'
import React, { useState } from 'react';
import '@/styles/styles.css'
import 'animate.css';
import CheckIcon from '@mui/icons-material/Check';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const page = () => {

  const steps = [
    { id: 1, title: 'Identificación del cliente', status: '5/5' },
    { id: 2, title: 'Datos complementarios', status: '5/5' },
    { id: 3, title: 'Información Financiera e inversiones', status: '5/5' },
    { id: 4, title: 'Requisitos', status: '1/1' }
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const checklistItems = [
    {
      title: 'Identificación del cliente', steps: ['Datos Básicos', 'Datos de Identidad',
        'Datos de Contacto', 'Dirección de Residencia', 'Cuentas Bancarias']
    },
    {
      title: 'Datos complementarios', steps: ['Datos Laborales', 'Dirección Laboral', 'Otros ingresos',
        'Declaración Jurada de Persona Expuesta Políticamente (PEP)', 'Firmas Autorizadas / Apoderados', 'Referencia Comercial']
    },
    {
      title: 'Información Financiera e inversiones', steps: ['Perfil del Inversionista',
        'Operaciones de valores y financieras que realiza y comprende',
        'Fuentes de ingresos u origen de los fondos', 'Distribución activos líquidos']
    },
    { title: 'Requisitos', steps: ['Acuerdo de términos y condiciones'] }
  ];


  return (
    <div className='container3'>
      <div className='titulo'>
        ¡Enhorabuena!
      </div>
      <p>Has completado el proceso de solicitud de apertura de tu cuenta. En breve nos pondremos en contacto contigo.</p>
      <div className='container1'>
          <div className='profile-card'>

            <div className='profile-icon'>
              <ContactEmergencyIcon style={{ fontSize: '110px' }} />
            </div>
            <div className='profile-text'>
              Tu perfil de inversionista <strong style={{ fontSize: '40px' }}>Conservador</strong>
            </div>
          </div>
        <div className='checklist-container'>

          <div className="status-grid">
            {steps.map((data) => (
              <div key={data.id} className="status-box">
                <div className="status-header">{data.id}</div>
                <div className="status-content">
                  <div className="status-body">
                    <div className="status-title">{data.title}</div>
                  </div>
                  <div className="status-info">
                    <span className="status-checkmark"><CheckIcon /></span>
                    <span className="status-status">{data.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default page;