import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, SelectField } from '../../FormFields';

const genders = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '01',
    label: 'Male'
  },
  {
    value: '02',
    label: 'Female'
  }
];

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'Coimbatore'
  },
  {
    value: '2',
    label: 'Chennai'
  },
  {
    value: '3',
    label: 'Erode'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Tamilnadu'
  },
  {
    value: '22',
    label: 'Kerala'
  },
  {
    value: '33',
    label: 'Andra'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'India'
  },
  {
    value: '222',
    label: 'Italy'
  },
  {
    value: '333',
    label: 'United States'
  }
];

export default function PersonalDetails(props) {
  const {
    formField: {
      fullName,
      gender,
      city,
      state,
      country,
      mobile
    }
  } = props;
  return (
    <React.Fragment>
      <div class="w-full pt-2 p-4">
        <div class="mx-auto md:p-6 md:w-1/2">
          <div class="flex items-center justify-center" >
            <div class="mx-2 text-center">
              <Typography variant="h6" gutterBottom>
                <p className="font-sans text-blue-900 flex flex-wrap justify-center font-extrabold">Add your Personal Details </p></Typography>
              <Typography variant="subtitle1">
                <p className="font-sans text-blue-900 flex flex-wrap justify-center ">Please enter the fields</p></Typography>
            </div>
          </div>

          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputField name={fullName.name} label={fullName.label} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  name={gender.name}
                  label={gender.label}
                  data={genders}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  name={city.name}
                  label={city.label}
                  data={cities}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <SelectField
                  name={state.name}
                  label={state.label}
                  data={states}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <SelectField
                  name={country.name}
                  label={country.label}
                  data={countries}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputField name={mobile.name} label={mobile.label} fullWidth />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
