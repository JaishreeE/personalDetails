import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';

export default function CompanyDetails(props) {
  const {
    formField: {
      companyName,
      emailId,
      jobDesc,
      yearOfExp
    }
  } = props;
  return (
    <React.Fragment class="mx-auto container flex items-center">
      <div class="w-full pt-2 p-4">
        <div class="mx-auto md:p-6 md:w-1/2">
          <div class="flex items-center justify-center" >
            <div class="mx-2 text-center">
              <Typography className="flex flex-wrap justify-between" variant="h6" gutterBottom>
                Add your Company Details</Typography>
              <Typography variant="subtitle1">
                Please enter the fields</Typography>
            </div>
          </div>

          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">


          <div class="mb-2 sm:mb-0 flex flex-row">
    <div class="h-10 w-10 self-center mr-2">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </div>
    <div>
      <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">LogoText</a><br/>
      <span class="text-xs text-grey-dark">Beautiful New Tagline</span>
    </div>
  </div>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputField name={companyName.name} label={companyName.label} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <InputField name={emailId.name} label={emailId.label} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <InputField name={jobDesc.name} label={jobDesc.label} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <InputField name={yearOfExp.name} label={yearOfExp.label} fullWidth />
              </Grid>
              <div class="flex items-center justify-between">
                <label class="block text-gray-500 font-bold" for="remember">
                  <input class="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                  <span class="text-sm"> I accept</span>
                  <a class="font-bold text-sm text-orange-500 hover:text-orange-800"
                    href="#password-request"> Terms and Conditions</a>
                </label>
              </div>
              <div>

              </div>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
