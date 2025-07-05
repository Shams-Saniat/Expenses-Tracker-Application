Below is a GitHub README file for your MERN stack expense tracker application. It explains the project, its features, and provides clear instructions for installation and setup. The README is structured to be user-friendly and comprehensive, covering prerequisites, installation steps, and troubleshooting tips.



# Expense Tracker

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for tracking personal expenses, built with Tailwind CSS and DaisyUI for a responsive and modern UI. The application allows users to add, view, delete, and filter expenses, with a summary of total expenses and category-wise breakdowns.

## Features

- **Add Expenses**: Input expense details (title, amount in Taka, date, category) with form validation. The submit button is disabled until all fields are correctly filled.
- **Display Expenses**: View expenses in a card-based list, including title, amount, date, category, and a delete option.
- **Expense Summary**: Displays total expenses, highest expense, and category-wise totals (e.g., Food: 2000 Taka).
- **Filtering**: Filter expenses by month and category.
- **Backend Integration**: Stores and retrieves data using MongoDB, with a REST API built on Node.js and Express.
- **Responsive Design**: Styled with Tailwind CSS and DaisyUI for a clean, modern interface.
- **Notifications**: Uses `react-toastify` for user feedback on actions (e.g., adding or deleting expenses).

## Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI, react-toastify
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Tools**: MongoDB Compass (optional for database visualization)

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v14 or higher, v18 recommended): [Download](https://nodejs.org/)
- **MongoDB Community Server**: [Download](https://www.mongodb.com/try/download/community)
- **MongoDB Compass** (optional): [Download](https://www.mongodb.com/try/download/compass) for visualizing the database
- **Git**: To clone the repository
- A code editor (e.g., VS Code)

## Installation and Setup

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker
```

Replace `<your-username>` with your GitHub username if you’ve forked or created the repository.

### 2. Set Up MongoDB

1. **Install MongoDB**:
   - Download and install MongoDB Community Server from the [official site](https://www.mongodb.com/try/download/community).
   - Follow the installer prompts. On Windows, select “Install MongoDB as a Service” for automatic startup.

2. **Add MongoDB to PATH** (if `mongod` is not recognized):
   - Find the MongoDB `bin` directory (e.g., `C:\Program Files\MongoDB\Server\7.0\bin` on Windows).
   - Add it to your system PATH:
     - Windows: Search for “Environment Variables” in the Start menu, edit the `Path` variable, and add the `bin` path.
     - macOS/Linux: Add `export PATH=$PATH:/path/to/mongodb/bin` to your shell configuration (e.g., `~/.bashrc` or `~/.zshrc`).

3. **Start MongoDB**:
   ```bash
   mongod
   ```
   If you get a “data directory not found” error, create it:
   ```bash
   mkdir -p ~/data/db  # macOS/Linux
   mkdir C:\data\db    # Windows
   mongod --dbpath ~/data/db  # or C:\data\db on Windows
   ```

4. **Verify MongoDB**:
   - Open MongoDB Compass and connect to `mongodb://localhost:27017`.
   - You should see the `expense-tracker` database after adding data.

### 3. Set Up the Backend

1. **Navigate to the Server Directory**:
   ```bash
   cd server
   ```

2. **Install Backend Dependencies**:
   ```bash
   npm install
   ```
   This installs `express`, `mongoose`, and `cors`.

3. **Start the Backend**:
   ```bash
   npm start
   ```
   The server should run on `http://localhost:5000`. Confirm it logs: `Server running on port 5000`.

4. **Test the API**:
   - Open a browser or Postman and visit `http://localhost:5000/api/expenses`. It should return `[]` (empty array) if no expenses are added.
   - To add a test expense:
     ```
     POST http://localhost:5000/api/expenses
     Content-Type: application/json
     {
       "title": "Test Expense",
       "amount": 100,
       "date": "2025-07-05",
       "category": "Food"
     }
     ```

### 4. Set Up the Frontend

1. **Navigate to the Client Directory**:
   Open a new terminal and run:
   ```bash
   cd D:\projects\client
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```
   This installs `react`, `react-dom`, `react-scripts`, `react-toastify`, `tailwindcss`, and `daisyui`.

3. **Start the Frontend**:
   ```bash
   npm start
   ```
   This should open `http://localhost:3000` in your browser. If not, navigate to that URL manually.

### 5. Verify the Application

- **Frontend**: At `http://localhost:3000`, you should see the “Expense Tracker” interface with a form to add expenses, a list of expenses, a summary, and filters.
- **MongoDB Compass**: Connect to `mongodb://localhost:27017/expense-tracker` and check the `expenses` collection for added expenses.
- **Functionality**:
  - Add an expense using the form (e.g., title: “Lunch”, amount: 500, date: today, category: Food).
  - Verify the expense appears in the list and Compass.
  - Test filtering by month or category and deleting expenses.

## Project Structure

```
expense-tracker/
  ├── client/                 # React frontend
  │   ├── public/
  │   │   └── index.html
  │   ├── src/
  │   │   ├── components/
  │   │   │   ├── ExpenseForm.jsx
  │   │   │   ├── ExpenseList.jsx
  │   │   │   ├── ExpenseSummary.jsx
  │   │   │   └── Filter.jsx
  │   │   ├── App.jsx
  │   │   ├── index.js
  │   │   └── index.css
  │   ├── package.json
  │   └── tailwind.config.js
  ├── server/                 # Node.js/Express backend
  │   ├── models/
  │   │   └── Expense.js
  │   ├── routes/
  │   │   └── expenseRoutes.js
  │   ├── server.js
  │   └── package.json
  └── README.md
```

## Troubleshooting

- **Backend Error: `Cannot find module 'server.js'`**:
  - Ensure you’re running `npm start` in `expense-tracker/server`, not the root directory.
  - Verify `server.js` exists in `expense-tracker/server`.
- **MongoDB Error: `'mongod' is not recognized`**:
  - Install MongoDB and add its `bin` directory to your system PATH.
  - Start MongoDB with `mongod` or `mongod --dbpath C:\data\db`.
- **Frontend Blank Page**:
  - Check the browser console (Inspect → Console) for errors like `Module not found` or `Failed to fetch`.
  - Ensure `index.js` and `App.jsx` match the boilerplate.
  - Reinstall dependencies: `npm install` in `client`.
- **CORS Issues**:
  - Ensure `server.js` includes `app.use(cors())` or `app.use(cors({ origin: 'http://localhost:3000' }))`.
- **Port Conflicts**:
  - If port 3000 or 5000 is in use, change the port in `client/package.json` (e.g., `PORT=3001 react-scripts start`) or `server.js` (e.g., `PORT=5001`).

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. Report issues or suggest features via GitHub Issues.

## License

This project is licensed under the MIT License.



### How to Use This README
1. **Save the README**:
   - Place the `README.md` file in the root of your project (`D:\projects\README.md`) to match the boilerplate structure.
   - If you’re hosting the project on GitHub, this README will display on the repository’s main page.

2. **Push to GitHub** (if not already done):
   - Initialize a Git repository:
     ```bash
     cd D:\projects
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Create a repository on GitHub and link it:
     ```bash
     git remote add origin https://github.com/<your-username>/expense-tracker.git
     git push -u origin master
     ```
   - Replace `<your-username>` with your GitHub username.

3. **Verify Setup**:
   - Follow the README’s installation steps to ensure the backend and frontend are running.
   - If the frontend is still blank, check the troubleshooting section in the README and share:
     - Terminal errors from `npm start` in `D:\projects\client` or `D:\projects\server`.
     - Browser console errors at `http://localhost:3000`.
     - Response from `http://localhost:5000/api/expenses`.
     - Confirmation that MongoDB is running and Compass connects to `expense-tracker`.

### Addressing Your Previous Issue
The previous error (`Cannot find module 'D:\projects\server.js'`) occurred because you ran `npm start` in `D:\projects` instead of `D:\projects\server`. The README clarifies this by explicitly instructing to run `npm start` in the `server` directory. If you’re still seeing a blank frontend, try the simplified `App.jsx` from the previous response to isolate the issue, and let me know any errors.

This README should guide anyone (including yourself) to set up the project and troubleshoot common issues. Let me know if you need help with GitHub setup or further debugging!
