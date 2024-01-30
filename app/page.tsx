'use client'
import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import '@/styles/stepline.css';
import Paso1 from '@/components/pasos/Paso1';
import Paso2 from '@/components/pasos/Paso2';
import Paso3 from '@/components/pasos/Paso3';
import Perfil from '@/components/pasos/Perfil';

interface Step {
  number: string;
  name: string;
}



const stepsData: Step[] = [
  { number: '1', name: 'Identificación del cliente' },
  { number: '2', name: 'Datos complementarios' },
  { number: '3', name: 'Información financiera e inversiones' }, 
];


const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);


  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goForward = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep == 2) {
      setCurrentStep(currentStep +1)
    }
    if (currentStep === 2) {
      setCurrentStep(3); 
    }
  };

  return (
    <>
     <div className="progress-container">
       {currentStep === 3 ? <div className="header-title">Resultado del Perfil</div> : <div className="header-title">{stepsData[currentStep].name}</div> } 
        <div className="linea">
          {stepsData.map((step, index) => (
            <div key={step.number} className={`circulo ${index === currentStep ? 'active' : ''}`}>
              {index < currentStep ? 
                <img src="https://i.ibb.co/71wJ41Q/Vector.png" alt="Completed" style={{ width: '36px', height: '36px' }}></img>              : step.number}
            </div>
          ))}
        </div>
      </div>

      <div className='container'>
      {currentStep === 0 && <Paso1/>}
      {currentStep === 1 && <Paso2/>}
      {currentStep === 2 && <Paso3/>}
      {currentStep === 3 && <Perfil/>}
      </div>

      <div className='container'>
      <div className="button-wrapper">
      <button className="buttonPrev" onClick={goBack} disabled={currentStep === 0}>  <ArrowBackIosNewIcon style={{ fontSize: '10px', fontWeight: '800' }} />ATRÁS</button>
        <button className="buttonNext" onClick={goForward} disabled={currentStep === stepsData.length}>
          CONTINUAR
          <ArrowForwardIosIcon style={{ fontSize: '10px', fontWeight: '800' }} />
        </button>
      </div>
      </div>
    </>
  );
};

export default Page;
