import {GoodsItem} from './GoodsItem'

export function GoodsList(props) {
  const {goods=[], changeCart= Function.prototype} = props;

  if(!goods.length){
    return <h3>No Items</h3>
  }

  return (
    <div className='goods'>
      {goods.map((e) =>
        <GoodsItem  key={e.mainId} {...e} addChange={changeCart}/>
      )}
    </div>
  )
}