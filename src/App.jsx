import React from 'react';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Main } from 'components/Main/Main';
import { Reviews } from 'components/Reviews/Reviews';
import { FAQ } from 'components/FAQ/FAQ';
export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Reviews />
      <FAQ />
    </>
  );
};
