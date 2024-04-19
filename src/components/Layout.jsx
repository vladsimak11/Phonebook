import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import {Container} from './Layout.styled';
import {Footer} from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer/>
    </>
  );
};