export default {
  formId: 'checkoutForm',
  formField: {
    fullName: {
      name: 'fullName',
      label: 'Full name *',
      requiredErrorMsg: 'Full name is required'
    },
    gender: {
      name: 'gender',
      label: 'Gender *',
      requiredErrorMsg: 'Gender is required'
    },
    city: {
      name: 'city',
      label: 'City *',
      requiredErrorMsg: 'City is required'
    },
    state: {
      name: 'state',
      label: 'State/Province/Region'
    },
    country: {
      name: 'country',
      label: 'Country *',
      requiredErrorMsg: 'Country is required'
    },
    mobile: {
      name: 'mobile',
      label: 'Mobile *',
      requiredErrorMsg: 'Mobile is required',
      invalidErrorMsg: 'Mobile is not valid (e.g. 9191919191)'
    },
    companyName: {
      name: 'companyName',
      label: 'Company Name *',
      requiredErrorMsg: 'Company Name is required'
    },
    emailId: {
      name: 'emailId',
      label: 'Email Id*',
      requiredErrorMsg: 'Email Id is required',
      invalidErrorMsg: 'Email Id is not valid (e.g. test@test.com)'
    },
    jobDesc: {
      name: 'jobDesc',
      label: 'Job Description'
    },
    yearOfExp: {
      name: 'yearOfExp',
      label: 'Years Of Experience'
    },
    termNcondi: {
      name: 'termNcondi',
      label: 'I accept ',
      requiredErrorMsg: 'Please read and accept Terms and Conditions',
    },
    otp: {
      name: 'otp',
      label: 'OTP *',
      requiredErrorMsg: 'OTP is required',
      invalidErrorMsg: 'OTP is invalid (e.g. 12345)'
    }
  }
};
