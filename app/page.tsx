'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '@/styles/styles.css';
import Paso1 from '@/components/pasos/Paso1';
import Paso2 from '@/components/pasos/Paso2';
import Paso3 from '@/components/pasos/Paso3';
import Perfil from '@/components/pasos/Perfil';
import Paso4 from '@/components/pasos/Paso4';


const steps = [
  { number: '1', name: 'Identificación<br>del cliente' },
  { number: '2', name: 'Datos<br>complementarios' },
  { number: '3', name: 'Información<br>financiera e inversiones' },
  { number: '4', name: 'Requisitos' },
  { number: '5', name: 'FATCA' }
];

const ProgressBar = ({ currentStep }: any) => {
  return (

    <div className="progress-bar">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isIncomplete = index > currentStep;
        const isNextCompleted = index + 1 < currentStep;

        let arrowClass = `arrow-right triangle-${index} ${isCompleted && !isActive ? 'completed' : ''} ${isIncomplete ? 'inactive' : ''}`;
        if (isCompleted && isNextCompleted) {
          arrowClass += ' next-completed';
        }


        return (
          <React.Fragment key={index}>
            <div className={`step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>
              <div className={`step-number ${isActive ? 'active' : isCompleted ? 'completed' : isIncomplete ? 'incomplete' : ''}`}>{step.number}</div>
              <div className='stepandnumber'>
                <div className={`step-name ${isActive ? 'active' : isCompleted ? 'completed' : ''}`} dangerouslySetInnerHTML={{ __html: step.name }}></div>
                {isCompleted && !isActive && <FontAwesomeIcon icon={faCheck} className="checkmark-icon" />}
              </div>
            </div>
            {index < steps.length - 1 && <div className={arrowClass}></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};


const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [isStep4Completed, setIsStep4Completed] = useState(false);




  const nextStep = () => {
    if (currentStep === 2 && !showProfile) {
      setShowProfile(true);
    } else if (showProfile && currentStep === 2) {
      setCurrentStep(4);
      setIsStep4Completed(true);
    } else {
      setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
    }
  };


  const prevStep = () => {
    if (currentStep === 4 && showProfile) {
      setCurrentStep(2);
      setShowProfile(true);
    } else if (showProfile) {
      setCurrentStep(2);
      setShowProfile(false);
    } else {
      setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    }
  };

const currentStepName1 = steps[currentStep].name.replace('<br>', ' ');


  return (
    <div className='container'>
      <div className='titulo'>
        {currentStepName1}
      </div>
      <ProgressBar currentStep={currentStep} isStepCompleted={isStep4Completed} />
      {currentStepName1 === 'Identificación del cliente' && <Paso1 />}
      {currentStepName1 === 'Datos complementarios' && <Paso2 />}
      {currentStepName1 === 'Información financiera e inversiones' && (
        <>
          {!showProfile && <Paso3 />}
          {showProfile && <Perfil />}
        </>
      )}
      {currentStepName1 === 'FATCA' && <Paso4 />}


      <div className="navigation-buttons">
        <button className="buttonPrev" onClick={prevStep} disabled={currentStep === 0}>  <ArrowBackIosNewIcon style={{ fontSize: '10px', fontWeight: '800' }} />ATRÁS</button>
        <button className="buttonNext" onClick={nextStep} disabled={currentStep === steps.length - 1}>
          CONTINUAR
          <ArrowForwardIosIcon style={{ fontSize: '10px', fontWeight: '800' }} />
        </button>
      </div>
    </div>
  );
};

export default Page;
