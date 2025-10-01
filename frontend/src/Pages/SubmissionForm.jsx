import React, { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionA from '../components/Section/SectionA/SectionA';
import SectionB from '../components/Section/SectionB/SectionB';
import SectionC from '../components/Section/SectionC/SectionC';
import SectionD from '../components/Section/SectionD/SectionD';
import SectionE from '../components/Section/SectionE/SectionE';
// Import your existing SectionA component (placeholder for now

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    
    institutionName: "",
    yearEstablished: "",
    address: "",
    pinCode: "",
    state: "",
    website: "",
    headName: "",
    instituteType: [], // Initialize as empty array
    instituteCategory: [], // Initialize as empty array
    affiliatedUniversity: "",
    aicteApproval: "",
    nbaAccredited: "",
    nbaValidityDate: "",
    naacAccredited: "",
    naacScore: "",
    naacValidityDate: "",
    otherAccreditation: "",
    applicantName: "",
    applicantDesignation: "",
    applicantContact: "",
    applicantEmail: "",
    driveLink: "",
  });

  const steps = [
    {
      id: 'A',
      title: 'Institution Details',
      description: 'Basic information about your institution',
      component: SectionA
    },
    {
      id: 'B',
      title: 'Academic Programs',
      description: 'Courses and curriculum details',
      component: SectionB
    },
    {
      id: 'C',
      title: 'Faculty & Staff',
      description: 'Teaching and support staff information',
      component: SectionC
    },
    {
      id: 'D',
      title: 'Infrastructure',
      description: 'Campus facilities and resources',
      component: SectionD
    },
    {
      id: 'E',
      title: 'Documents',
      description: 'Required certificates and attachments',
      component: SectionE
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <div className="stepper-container">
      {/* Stepper Navigation */}
      <div className="stepper-nav">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isClickable = true; // Allow clicking on any step

          return (
            <div key={step.id} className="stepper-wrapper">
              <div
                className={`stepper-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isClickable ? 'clickable' : ''}`}
                onClick={() => isClickable && handleStepClick(index)}
              >
                <div className="stepper-circle">
                  {isCompleted ? (
                    <Check className="step-icon" />
                  ) : (
                    <span className="step-letter">{step.id}</span>
                  )}
                </div>
                <div className="stepper-content">
                  <h3 className="step-title">Section {step.id}</h3>
                  <p className="step-description">{step.title}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`stepper-connector ${isCompleted ? 'completed' : ''}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="stepper-main">
        <CurrentComponent
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>

      <style jsx>{`
        .stepper-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0fdfa 0%, #e6fffa 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          padding-top: 2rem;
        }

        .stepper-nav {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem;
          overflow-x: auto;
          margin-bottom: 2rem;
        }

        .stepper-wrapper {
          display: flex;
          align-items: center;
          min-width: auto;
        }

        .stepper-item {
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          cursor: default;
        }

        .stepper-item.clickable {
          cursor: pointer;
        }

        .stepper-item.clickable:hover {
          transform: translateY(-2px);
        }

        .stepper-item.active {
          color: white;
        }

        .stepper-item.active .stepper-circle {
          background: linear-gradient(135deg, #0f766e, #0d9488);
          box-shadow: 0 8px 25px rgba(15, 118, 110, 0.3);
          color: white;
        }

        .stepper-item.completed {
          color: white;
        }

        .stepper-item.completed .stepper-circle {
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
        }

        .stepper-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e2e8f0;
          color: #64748b;
          font-weight: 600;
          font-size: 1.125rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .stepper-item:not(.active):not(.completed) .stepper-circle {
          background: #e2e8f0;
          color: #64748b;
        }

        .step-letter {
          font-weight: 700;
          font-size: 1.25rem;
        }

        .step-icon {
          width: 20px;
          height: 20px;
        }
        .stepper-main {
          max-width: 1500px;
          margin: 0 auto;
          padding: 2rem;
        }
        .stepper-content h3 {
          display: none;
        }

        .stepper-content p {
          display: none;
        }

        .stepper-item:not(.active):not(.completed) .stepper-content h3 {
          display: none;
        }

        .stepper-item:not(.active):not(.completed) .stepper-content p {
          display: none;
        }

        .stepper-connector {
          width: 80px;
          height: 3px;
          background: #e2e8f0;
          transition: all 0.3s ease;
          margin: 0 1rem;
        }

        .stepper-connector.completed {
          background: #10b981;
        }

        .stepper-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem 2rem;
        }

        @media (max-width: 768px) {
          .stepper-nav {
            flex-direction: column;
            align-items: stretch;
          }

          .stepper-wrapper {
            min-width: unset;
            flex-direction: column;
          }

          .stepper-connector {
            width: 3px;
            height: 40px;
            margin: 0.75rem 0;
            align-self: center;
          }

          .stepper-item {
            justify-content: center;
          }

          .stepper-container {
            padding-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StepperForm;