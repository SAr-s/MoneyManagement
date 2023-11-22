// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <div className="details-container">
      <div className="each-card color1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="image"
        />
        <div className="money-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance} </p>
        </div>
      </div>
      <div className="each-card color2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="money-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="each-card color3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="money-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
