import {useState, useEffect} from 'react'
import {API_KEY, API_URL} from '../config'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart'
import {BasketList} from './BasketList'
import {Alert} from './Alert'



function Shop(){
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('');
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then(response => response.json()).then(data => {
      setGoods(data.shop)
      setLoading(false);
    })
  },[])

  const addOrder = (item) => {
    let itemIndex = order.findIndex(elem=> elem.mainId === item.mainId)
    if(itemIndex<0){
    const newItem = {
      ...item,
      quantity: 1,
    };
    setOrder([...order,newItem])
  } else{
    const newOrder = order.map((elem, i)=> {
      if(i === itemIndex){
        return {
          ...elem,
          quantity: elem.quantity+1
        }
      }
      else{
        return elem;
      }
    })
    setOrder(newOrder)
  }
  setAlertName(item.displayName)
  }
  const handleBasketShow = ()=>{
    setBasketShow(!isBasketShow)
  }
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.mainId !== itemId)
    setOrder(newOrder)
  }
  const increaseQuantity = (type, id)=>{
    if(type==='plus'){
      const newOrder = order.map((item) => {
        if(item.mainId === id){
          const newQ = item.quantity +1;
          return {
            ...item,
            quantity: newQ,
          }
        }
        else{
          return item
        }
      })
      setOrder(newOrder)
    }
    else{
      const newOrder = order.map((item) => {
        if(item.mainId === id){
          const newQ = item.quantity -1;
          return {
            ...item,
            quantity: newQ>0 ? newQ : 0,
          }
        }
        else{
          return item
        }
      })
      setOrder(newOrder)
    }
  }
  const closeAlert= () => {
    setAlertName('');
  }

  return <main className='container content'>
    <Cart
      quantity={order.length}
      handleBasketShow={handleBasketShow}
    />
    {
      loading ? <Preloader />: <GoodsList goods={goods} changeCart={addOrder} />
    }
    {
      isBasketShow && <BasketList
        order={order}
        handleBasketShow={handleBasketShow}
        removeFromBasket={removeFromBasket}
        increaseQuantity={increaseQuantity}
        />
    }
    {
      alertName && <Alert name={alertName} closeAlert={closeAlert} />
    }
  </main>
}

export {Shop}