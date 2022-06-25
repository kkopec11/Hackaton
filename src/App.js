import React from 'react';
import Switch from './components/Switch';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Switch />
      <ToastContainer position="bottom-right" autoclose={2500} />
    </>
  );
}

export default App;
