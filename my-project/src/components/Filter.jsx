import React from 'react';

const Filter = ({ setFilters }) => {
  const categories = ['Food', 'Travel', 'Entertainment', 'Bills', 'Others'];
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Filter Expenses</h2>
        <div className="form-control mb-4">
          <label className="label">Month</label>
          <select
            className="select select-bordered"
            onChange={(e) => setFilters((prev) => ({ ...prev, month: e.target.value }))}
          >
            <option value="">All Months</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="form-control mb-4">
          <label className="label">Category</label>
          <select
            className="select select-bordered"
            onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;