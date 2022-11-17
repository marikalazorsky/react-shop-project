import {useEffect, useContext} from "react";
import {ShopContext} from '../context';

function Alert() {
  const {alertName: displayName = '', closeAlert = Function.prototype} = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    //eslint-disable-next-line 
  }, [displayName]);

  return <div id="toast-container">
      <div className="toast">{displayName} is added to basket</div>
  </div>
}

export {Alert}