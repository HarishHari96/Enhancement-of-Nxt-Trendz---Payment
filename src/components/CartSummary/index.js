// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <p>
              Order Total: <span className="total"> Rs {totalAmount}/-</span>
            </p>
            <p>{cartList.length} items in cart</p>
            <button type="button" className="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
