import React from 'react';
import { Typography } from '@material-ui/core';

function PersonalDetailsSuccess() {
  return (
    <React.Fragment>
    <div class="flex items-center justify-center my-20" >
            <div class="mx-2 text-center">
              <Typography variant="h6" gutterBottom>
                <p className="font-sans text-blue-900 flex flex-wrap justify-center font-extrabold">Welcome</p></Typography>
              <Typography variant="subtitle1">
                <p className="font-sans text-blue-900 flex flex-wrap justify-center ">Thank you details...</p></Typography>
            </div>
          </div>

    </React.Fragment>
  );
}

export default PersonalDetailsSuccess;
