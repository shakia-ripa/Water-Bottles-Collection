import PropTypes from 'prop-types';
import './Bottle.css';
const Bottle = ({bottle}) => {
    const {price, img, name} = bottle;
    return (
        <div className='bottle'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h5>Price: {price}</h5>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired
}

export default Bottle;