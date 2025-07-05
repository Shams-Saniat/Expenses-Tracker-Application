import React from 'react';
import { toast } from 'react-toastify';

const ExpenseList = ({ expenses, fetchExpenses, filters }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/expenses/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        toast.success('Expense deleted successfully');
        fetchExpenses();
      } else {
        toast.error('Failed to delete expense');
      }
    } catch (error) {
      toast.error('Error deleting expense');
    }
  };

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

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Expenses</h2>
        {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          <div className="grid gap-4">
            {filteredExpenses.map((expense) => (
              <div key={expense._id} className="card bg-base-200">
                <div className="card-body flex-row justify-between items-center">
                  <div>
                    <h3 className="font-bold">{expense.title}</h3>
                    <p>Amount: {expense.amount} Taka</p>
                    <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
                    <p>Category: {expense.category}</p>
                  </div>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleDelete(expense._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;