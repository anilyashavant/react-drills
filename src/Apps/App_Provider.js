import React from 'react';
import './style.css';
import { UserImage } from './components/image';
import { AccountDashboard } from '../components/AccountDashboard';
import { DataContext } from '../DataContext';

let data = ['abc', 'xyz'];

export default function App_Provider() {
  return (
    <>
      <DataContext.Provider value={data}>
        <AccountDashboard></AccountDashboard>
      </DataContext.Provider>
    </>
  );
}
