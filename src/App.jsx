import styles from './style';
import React, { useState } from 'react';

import { Navbar, Home, ExperimentsSketches, About, Footer, NotFound, 
  MarblePaint, SilentKillers, Frankenstein } from './components';
import { BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  Route, 
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/experimentssketches" element={<ExperimentsSketches />} />
        <Route path="/about" element={<About />} />
        <Route path="/marble-paint" element={<MarblePaint />} />
        <Route path="/silent-killers" element={<SilentKillers />} />
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
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} z-10`}>
          <Navbar />
        </div>
      </div>
      <div className='bg-primary w-full z-0'>
        <Outlet />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;