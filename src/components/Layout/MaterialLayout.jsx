import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';

import { theme, useStyle } from './styles';

export default function MaterialLayout(props) {
  const { children } = props;

  return (
    <div className="mx-auto container flex items-center bg-gray-200">
      <div className="w-full pt-2 p-4">
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
