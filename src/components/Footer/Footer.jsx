import React from 'react';
import { Link, Typography } from '@material-ui/core/';

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <div class="mt-8">
        <p class="text-sm">Already have an account
            <a class="font-bold text-sm text-orange-500 hover:text-orange-800" href="#"> Login</a>
        </p>
      </div>
    </Typography>
  );
}
