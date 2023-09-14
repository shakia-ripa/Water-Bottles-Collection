const getStoredCart = () =>{
    const cartStrigified = localStorage.getItem('cart');
    if(cartStrigified){
        return JSON.parse(cartStrigified);
    }
    return [];
}
const addToLS=(id) =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}
const removeFromLS = (id)=>{
    const cart = getStoredCart();
    const remainingItem = cart.filter(currentId => currentId!==id);
    saveCartToLS(remainingItem);
}
const saveCartToLS =(cart)=>{
    const stingifiedData = JSON.stringify(cart);
    localStorage.setItem('cart', stingifiedData);
}

export {getStoredCart, addToLS, removeFromLS}