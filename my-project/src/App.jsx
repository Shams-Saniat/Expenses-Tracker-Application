import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import Filter from './components/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filters, setFilters] = useState({ month: '', period: '', category: '' });

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      toast.error('Failed to fetch expenses');
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ExpenseForm fetchExpenses={fetchExpenses} />
          <Filter setFilters={setFilters} />
        </div>
        <div className="md:col-span-2">
          <ExpenseSummary expenses={expenses} filters={filters} />
          <ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} filters={filters} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;