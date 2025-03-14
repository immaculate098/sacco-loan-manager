import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoanList from './components/LoanList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loans" element={<LoanList />} />
      </Routes>
    </Router>
  );
}

export default App;
