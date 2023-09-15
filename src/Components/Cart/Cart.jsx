import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div >
                <h3>Your Selected Item: </h3>
                <div className='cart-container'>
                {
                    cart.map((bottle) => <div className='cart-item' key={bottle.id}>
                        <img src={bottle.img}></img>
                        <br />
                        <button onClick={() =>handleRemoveFromCart(bottle.id)}>Remove</button>
                        </div>)
                    
                }
                </div>
                
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;