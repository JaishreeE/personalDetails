import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
  withStyles
} from '@material-ui/core';
import { orange, grey } from '@material-ui/core/colors';
import { Formik, Form } from 'formik';


import PersonalDetails from './Forms/PersonalDetails';
import CompanyDetails from './Forms/CompanyDetails';
import OtpValidation from './OtpValidation';
import PersonalDetailsSuccess from './PersonalDetailsSuccess/Login';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Personal Details', 'Company details', 'OTP validation'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetails formField={formField}/>;
    case 1:
      return <CompanyDetails formField={formField} />;
    case 2:
      return <OtpValidation formField={formField}/>;
    default:
      return <div>Not Found</div>;
  }
}

export default function InitialPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    debugger;
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "#FFFFFF",
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },

    },

  }))(Button);

  return (
    <React.Fragment>
      <div className="text-gray-100 bg-gray-900 body-font shadow w-full">
      <Stepper activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>


      <React.Fragment>
        {activeStep === steps.length ? (
          <PersonalDetailsSuccess />
        ) : (
          <Formik class="w-full pt-2 p-4"
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId} >
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && ( <div  className={classes.wrapper}>
                    <Button onClick={_handleBack}
                      className={classes.margin}>
                      Back
                    </Button>
                    </div>
                  )}
                  <div className={classes.wrapper}>
                    <ColorButton
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.margin}
                    >
                      {isLastStep ? 'Verify' : 'Next'}
                    </ColorButton>
                    </div>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
