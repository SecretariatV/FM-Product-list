import S from "./index.module.scss";
import empty from "@assets/illustration-empty-cart.svg";
import { useEffect, useState } from "react";
import { Item } from "./item";
import { formatValue } from "@utils/formatUtils";
import neutral from "@assets/icon-carbon-neutral.svg";
import { AppContext } from "@machines/appMachine";

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const state = AppContext.useSelector((state) => state);
  const { send } = AppContext.useActorRef();

  const handleOpenModal = () => {
    send({ type: "OPEN_MODAL", value: true });
  };

  useEffect(() => {
    const count = Object.values(state.context.desserts).reduce(
      (acc, item) => acc + item.count,
      0
    );

    const price = Object.values(state.context.desserts).reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );

    setTotal(count);
    setTotalPrice(price);
  }, [state.context]);

  return (
    <div className={S.body}>
      <h2>Your Cart({total})</h2>
      {total > 0 ? (
        <>
          {Object.keys(state.context.desserts).map((cart, index) => (
            <Item key={index} cart={cart} />
          ))}
          <div className={S.order}>
            <p className="dark-rose md">Order Total</p>
            <p className="red lg bold">${formatValue(totalPrice)}</p>
          </div>
          <div className={S.note}>
            <img src={neutral} alt="" />
            <p className="md dark-rose">
              This is a <span className="bold">cerbon-neutral</span> delivery
            </p>
          </div>
          <button onClick={handleOpenModal}>Confirm Order</button>
        </>
      ) : (
        <div className={S.empty}>
          <img src={empty} alt="" />
          <span className="medium-rose md">
            Your added items will appear here
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
