import React from 'react';
import { useFormikContext } from 'formik';
import { Typography } from '@material-ui/core';
import OtpForm from 'react-otp-form'

export default function OtpValidation() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <div class="w-full pt-2 p-4">
        <div class="mx-auto md:p-6 md:w-1/2">
          <div class="flex items-center justify-center" >
            <div class="mx-2 text-center">
              <Typography className="flex flex-wrap justify-between" variant="h6" gutterBottom>
                Enter OTP</Typography>
              <Typography variant="subtitle1">
                Please enter the fields</Typography>
            </div>
          </div>

          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <OtpForm
              numberOfInputs={4}
              showOtp={true}
              
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
