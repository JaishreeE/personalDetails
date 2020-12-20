import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Button,
  CircularProgress,
  withStyles
} from '@material-ui/core';
import { orange, grey } from '@material-ui/core/colors';
import { Formik, Form } from 'formik';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import PersonalDetails from './Forms/PersonalDetails';
import CompanyDetails from './Forms/CompanyDetails';
import OtpValidation from './OtpValidation';
import PersonalDetailsSuccess from './PersonalDetailsSuccess/Login';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

import { styled, makeStyles } from "@material-ui/styles";

const StyledStepLabel = styled(StepLabel)({
  
  "& .MuiStepLabel-label": {
    color: "#ffffff"
  },
  "& .MuiStepIcon-active": {
    color: "#ED5901"
  },
  "& .MuiStepIcon-completed":{
    color: "#ED5901",
  }
});

const StyledStepper = styled(Stepper)({
  "& ..MuiStepConnector-line": {
    borderColor: "#ED5901"
  },
  backgroundColor: "#29435A"
});

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
    for (var key in values) {
      localStorage.setItem(key, values[key]);
    }
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
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
      <StyledStepper connector={
            <StepConnector
              classes={{
                line: classes.connectorLine
              }}
            />} activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StyledStepLabel >{label}</StyledStepLabel>
          </Step>
        ))}
      </StyledStepper>

      <React.Fragment>
        {activeStep === steps.length ? (
          <PersonalDetailsSuccess />
        ) : (
          <Formik 
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId} >
                {_renderStepContent(activeStep)}

                <div class="flex items-left justify-center ml-96 -mt-10" className={classes.buttons}>
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
