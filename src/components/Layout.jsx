import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <AppBar />
        <div className={css.container}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
    </>
  );
};