import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    fullName,
    gender,
    state,
    city,
    mobile,
    country,
    companyName,
    emailId,
    termNcondi,
    otp
  }
} = checkoutFormModel;

export default {
  [fullName.name]: '',
  [gender.name]: '',
  [state.name]: '',
  [city.name]: '',
  [mobile.name]: '',
  [country.name]: '',
  [companyName.name]: '',
  [emailId.name]: '',
  [termNcondi]: false,
  [otp.name]: ''
};
