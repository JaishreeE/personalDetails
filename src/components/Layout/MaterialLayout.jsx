import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';

import { theme, useStyle } from './styles';

export default function MaterialLayout(props) {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <div >
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
