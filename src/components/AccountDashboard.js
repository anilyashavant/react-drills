import React, { useContext } from 'react';
import ULAccounts from './ULAccounts.js';
import { DataContext } from '../DataContext.js';

export function AccountDashboard(props) {
  //const { accounts } = props;
  const data = useContext(DataContext);

  return (
    <>
      <div> Account Summary </div>
      <div>Number of Accounts: {data.length}</div>
      <ULAccounts></ULAccounts>
    </>
  );
}
