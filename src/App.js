import React from 'react';
import { Header } from './components/Header';
import { Financialplan } from './components/Financialplan';
import { Goal } from './components/Goal';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Monthlysummary } from './components/Monthlysummary';

import './App.css';


function App() {
  return (
    <div>
      <Header />
    <div id='container'>
      <Financialplan />
      <Goal />
      <IncomeExpenses />
      <Monthlysummary />
    </div>
    </div>
  );
}

export default App;
