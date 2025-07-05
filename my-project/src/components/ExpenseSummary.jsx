import React from 'react';

const ExpenseSummary = ({ expenses, filters }) => {
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const matchesMonth = filters.month
      ? expenseDate.getMonth() + 1 === parseInt(filters.month)
      : true;
    const matchesCategory = filters.category
      ? expense.category === filters.category
      : true;
    return matchesMonth && matchesCategory;
  });

  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const highestExpense = filteredExpenses.reduce((max, expense) => 
    expense.amount > max ? expense.amount : max, 0);
  
  const categoryTotals = filteredExpenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">Expense Summary</h2>
        <p>Total Expenses: {totalExpenses} Taka</p>
        <p>Highest Expense: {highestExpense} Taka</p>
        <h3 className="font-bold mt-4">By Category:</h3>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <p key={category}>{category}: {amount} Taka</p>
        ))}
      </div>
    </div>
  );
};

export default ExpenseSummary;