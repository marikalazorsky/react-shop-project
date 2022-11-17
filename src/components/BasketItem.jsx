import {useContext} from 'react';
import {ShopContext} from '../context';

function BasketItem(props) {
  const {
    mainId, 
    displayName,
    price,
    quantity
  } = props;

  const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext);
console.log(mainId);
  return  <li className="collection-item">
            {displayName} <button onClick={() => decQuantity(mainId)}>-</button>  { quantity }  <button onClick={() => incQuantity(mainId)}>+</button> = {price.regularPrice*quantity}€
            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
              <i className="material-icons basket-delete">clear</i>
            </span>
          </li>
}

export {BasketItem}