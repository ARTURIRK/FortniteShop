export function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: {finalPrice},
    displayAssets: [{full_background}],
    addChange = Function.prototype,
  } = props
  return (
        <div className="card">
          <div className="card-image">
            <img src={full_background} alt={displayName} />
          </div>
          <span className="card-title">{displayName}</span>
          <div className="card-content">
            <p>{displayDescription || 'Топ за свои деньги'}</p>
          </div>
      <div className="card-action">
          <button className='btn' onClick={() => addChange({
            mainId,
            displayName,
            finalPrice,
          })}>
            Купить
          </button>
          <span className='right'>{finalPrice} руб.</span>
        </div>
    </div>
)
}
