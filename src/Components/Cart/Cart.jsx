import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className='cart-container'>
                {
                    cart.map((bottle) => <div key={bottle.id}>
                        <img src={bottle.img}></img>
                        <br />
                        <button>Remove</button>
                        </div>)
                    
                }
                
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart:PropTypes.array.isRequired
}
export default Cart;