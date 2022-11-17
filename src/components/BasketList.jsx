import {useContext} from 'react';
import {ShopContext} from '../context';
import { BasketItem } from "./BasketItem";

function BasketList() {
  const {order = [],
    handleBasketShow = Function.prototype,
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return  <ul className="collection basket-list">
            <li className="collection-item active blue">Basket</li>
             {
              order.length ? order.map(item => (
                <BasketItem
                  key={item.mainId}
                  {...item}
                />
              )) : <li className="collection-item">Basket is empty</li>
            }
            <li className="collection-item active blue">
              Total: {totalPrice}€
              <button className="secondary-content btn-small">Make an order</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>

          </ul>
}



export {BasketList}