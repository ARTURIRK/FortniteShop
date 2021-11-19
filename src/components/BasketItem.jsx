export function BasketItem(props){
  const {
    mainId,
    displayName,
    finalPrice,
    quantity,
    removeFromBasket = Function.prototype,
    increaseQuantity= Function.prototype,
  } = props

  return  <li  className="collection-item">
     <span> {displayName} </span>  <i className='material-icons pros' onClick={() => increaseQuantity('minus',mainId)}>remove</i>{quantity} <i className='material-icons' onClick={() => increaseQuantity('plus',mainId)}>add</i> = {finalPrice*quantity}
      <span className='secondary-content'>
      <i className='material-icons basket-delete' onClick={() => removeFromBasket(mainId)}>close</i>
    </span>
    </li>
}
