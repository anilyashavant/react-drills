//display user details with image ('https://i.imgur.com/yXOvdOSs.jpg') on a page

import React from 'react';
import './style.css';
import { UserImage } from './components/image';
import { AccountDashboard } from './components/AccountDashboard';
import { DataContext } from '../DataContext';

let data = ['abc', 'xyz'];
export function App_Provider() {
  return (
    <>
      <DataContext.Provider value={data}>
        <AccountDashboard></AccountDashboard>
      </DataContext.Provider>
    </>
  );
}
