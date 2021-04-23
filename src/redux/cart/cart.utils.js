export const addItemToCart = (cart, item) => {
  const theItem = cart.find(it => it.id === item.id);

  if (theItem) {
    return cart.map(it => 
      it.id === item.id 
      ? {...it, quantity: it.quantity + 1}
      : it);
  }

  return [...cart, {...item, quantity: 1}];
}