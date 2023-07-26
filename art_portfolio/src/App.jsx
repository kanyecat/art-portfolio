import styles from './style';
import React, { useState } from 'react';

import { Navbar, Home, ExperimentsSketches, About, Footer } from './components';
import { BrowserRouter, 
  Routes, 
  Route, 
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/experimentssketches" element={<ExperimentsSketches />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Root = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary w-full'>
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

export default App