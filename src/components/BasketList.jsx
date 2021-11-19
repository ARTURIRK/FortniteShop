import {BasketItem} from './BasketItem'


export function BasketList(props) {
  const {
    order=[],
    handleBasketShow=Function.prototype,
    removeFromBasket=Function.prototype,
    increaseQuantity= Function.prototype,
  } = props;
  const totalPrice = order.reduce((acc, elem)=>
  acc += elem.finalPrice*elem.quantity
,0)
  return <ul className="collection basket-list">
    <li  className="collection-item active">Корзина</li>
    {
      order.length ? order.map((item) =>
       <BasketItem
        key={item.mainId}
        {...item}
        removeFromBasket={removeFromBasket}
        increaseQuantity={increaseQuantity}
        />)
        :
         (<li className='collection-item'>Корзина пуста</li>)
    }
    <li className="collection-item active">
      Общая стоимость {totalPrice}
    </li>
    <li className="collection-item ">
      <button className='btn offer'>Оформить</button>
    </li>
    <i className='material-icons close-basket ' onClick={handleBasketShow}> close</i>
  </ul>
}