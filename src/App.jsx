import styles from './style';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Navbar, Home, ExperimentsSketches, About, Footer, NotFound, 
  MarblePaint, SilentKillers, Frankenstein, DefenseMechanism, ScrollToTop, Revolution, MotorizedBenchtopVice, DIYDF } from './components';
import { BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  Route, 
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import TeaBagBox from './components/TeaBagBox';
import CoffeeCupHolderCarrier from './components/CoffeeCupHolderCarrier';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/experimentssketches" element={<ExperimentsSketches />} />
        <Route path="/about" element={<About />} />
        <Route path="/DIYDF" element={<DIYDF />} />
        <Route path="/tea-bag-box" element={<TeaBagBox />} />
        <Route path="/coffee-cup-holder-carrier" element={<CoffeeCupHolderCarrier />} />
        <Route path="/motorized-benchtop-vice" element={<MotorizedBenchtopVice />} />
        <Route path="/r-evolution" element={<Revolution />} />
        <Route path="/marble-paint" element={<MarblePaint />} />
        <Route path="/silent-killers" element={<SilentKillers />} />
        <Route path="/defense-mechanism" element={<DefenseMechanism />} />
        <Route path="/frankenstein" element={<Frankenstein />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop />
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} z-20`}>
            <Navbar />
          </div>
        </div>
        <div className='bg-primary w-full z-0'>
          <Outlet />
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} z-20`}>
            <Footer />
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App;