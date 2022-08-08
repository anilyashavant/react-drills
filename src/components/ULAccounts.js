import React, { useContext } from 'react';
import { DataContext } from '../DataContext.js';
//import ReactDOM from 'react-dom';

export default function ULAccounts(props) {
  //const { accounts } = props;
  const accounts = useContext(DataContext);
  return (
    <ul>
      <li>
        {accounts.map((acc) => (
          <div>{acc}</div>
        ))}
      </li>
    </ul>
  );
}
