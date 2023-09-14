import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import Cart from "../Cart/Cart";
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/utilities";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        if (bottles.length) {
            const storedItem = getStoredCart();
            console.log(storedItem);
            const savedCart = [];
            for (const id of storedItem) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }
    const handleRemoveFromCart = (id)=>{
        const remainingCartItem = cart.filter(bottle => bottle.id!==id);
        setCart(remainingCartItem);
        removeFromLS(id);
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;