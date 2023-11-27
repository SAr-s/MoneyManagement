import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialHistoryDetails = []

// Write your code here

class MoneyManager extends Component {
  state = {
    income: 0,
    balance: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
    historyDetails: initialHistoryDetails,
  }

  onAddHistory = event => {
    event.preventDefault()

    const {title, amount, type} = this.state
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyDetails: [...prevState.historyDetails, newHistory],
      title: '',
      amount: '',
      type: 'Income',
    }))

    if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income + Number(amount),
        balance: prevState.balance + Number(amount),
        expenses: prevState.expenses,
      }))
    } else {
      this.setState(prevState => ({
        income: prevState.income,
        balance: prevState.balance - Number(amount),
        expenses: prevState.expenses + Number(amount),
      }))
    }
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddAmount = event => {
    this.setState({amount: event.target.value})
  }

  onAddTitle = event => {
    this.setState({title: event.target.value})
  }

  onDeleteItem = id => {
    const {historyDetails} = this.state

    const deleteTransaction = historyDetails.find(
      eachHistory => eachHistory.id === id,
    )
    if (deleteTransaction) {
      const {amount, type} = deleteTransaction
      const filteredDetails = historyDetails.filter(
        eachHistory => eachHistory.id !== id,
      )

      this.setState({historyDetails: filteredDetails})
      if (type === 'Income') {
        this.setState(prevState => ({
          income: prevState.income - Number(amount),
          balance: prevState.balance - Number(amount),
        }))
      } else {
        this.setState(prevState => ({
          expenses: prevState.expenses - Number(amount),
          balance: prevState.balance + Number(amount),
        }))
      }
    }
  }

  render() {
    const {
      income,
      balance,
      expenses,
      historyDetails,
      amount,
      title,
    } = this.state
    return (
      <div className="main-container">
        <div className="title-container">
          <h1 className="title-heading">Hi, Richard</h1>
          <p className="title-paragraph">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="details-item-container">
          <MoneyDetails income={income} balance={balance} expenses={expenses} />
        </div>
        <div
          className="inner-container
        "
        >
          <div>
            <form onSubmit={this.onAddHistory} className="form-container">
              <h1
                className="heading
              "
              >
                Add Transaction
              </h1>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                value={title}
                onChange={this.onAddTitle}
                type="text"
                placeholder="TITLE"
                className="input"
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={this.onAddAmount}
                placeholder="AMOUNT"
                className="input"
              />
              <label htmlFor="dropdown">TYPE</label>
              <select
                onChange={this.onChangeType}
                className="input"
                id="dropdown"
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="history-container">
            <h1>History</h1>
            <div className="history-frame">
              <p className="para">Title</p>
              <p className="para">Amount</p>
              <p className="para">Type</p>
            </div>
            <ul>
              {historyDetails.map(eachHistory => (
                <TransactionItem
                  key={eachHistory.id}
                  itemDetails={eachHistory}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
