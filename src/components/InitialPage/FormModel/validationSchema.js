import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    fullName,
    gender,
    mobile,
    city,
    country,
    state,
    companyName,
    emailId
  }
} = checkoutFormModel;

const visaRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [state.name]: Yup.string()
      .nullable()
      .required(`${state.requiredErrorMsg}`),
    [mobile.name]: Yup.string()
      .required(`${mobile.requiredErrorMsg}`)
      .test(
        'len',
        `${mobile.invalidErrorMsg}`,
        val => val && val.length === 10
      ),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [companyName.name]: Yup.string().required(`${companyName.requiredErrorMsg}`),
    [emailId.name]: Yup.string()
      .required(`${emailId.requiredErrorMsg}`)
      .matches(visaRegEx, emailId.invalidErrorMsg)
  })
];
