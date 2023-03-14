import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './Header';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Header />
        {children}
      </Container>
    </>
  );
}

export default Layout;
