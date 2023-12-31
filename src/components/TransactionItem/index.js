// Write your code here

import './index.css'

const TransactionItem = props => {
  const {itemDetails, onDeleteItem} = props
  const {id, type, title, amount} = itemDetails

  const onClickedDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="eachItem">
     <p className="item-para">{title}</p>
      <p className="item-para">Rs {amount}</p>
      <p className="item-para"> {type} </p>
      <button type="button" onClick={onClickedDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
