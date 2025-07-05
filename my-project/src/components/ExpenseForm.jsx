import React, { useState } from 'react';
import { toast } from 'react-toastify';

const categories = ['Food', 'Travel', 'Entertainment', 'Bills', 'Others'];

const ExpenseForm = ({ fetchExpenses }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: ''
  });

  const isFormValid = () => {
    return formData.title.trim() && 
           formData.amount > 0 && 
           formData.date && 
           formData.category;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success('Expense added successfully');
        setFormData({ title: '', amount: '', date: '', category: '' });
        fetchExpenses();
      } else {
        toast.error('Failed to add expense');
      }
    } catch (error) {
      toast.error('Error adding expense');
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">Add New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">Title</label>
            <input
              type="text"
              className="input input-bordered"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Amount (Taka)</label>
            <input
              type="number"
              className="input input-bordered"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Date</label>
            <input
              type="date"
              className="input input-bordered"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Category</label>
            <select
              className="select select-bordered"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={!isFormValid()}
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;