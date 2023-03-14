import React from 'react';
import Header from './Header';
import './Layout.scss';
import { Container, CssBaseline } from '@mui/material';

interface LayoutProps  { 
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <CssBaseline />
    <Container maxWidth={false} disableGutters>
      <Header/>
      {children}
    </Container>
</>
  );
};

export default Layout;