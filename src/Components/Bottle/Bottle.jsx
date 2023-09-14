import PropTypes from 'prop-types';
import './Bottle.css';
const Bottle = ({bottle, handleAddToCart}) => {
    const {price, img, name} = bottle;
    return (
        <div className='bottle'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h5>Price: {price}</h5>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;