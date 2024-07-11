import { AppContext } from "@machines/appMachine";
import S from "./index.module.scss";
import confirm from "@assets/icon-order-confirmed.svg";
import ModalItem from "./item";
import { useEffect, useState } from "react";
import { formatValue } from "@utils/formatUtils";

const Modal = () => {
  const state = AppContext.useSelector((state) => state);
  const { send } = AppContext.useActorRef();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const price = Object.values(state.context.desserts).reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );

    setTotalPrice(price);
  }, [state.context]);

  const handleClose = () => {
    send({ type: "OPEN_MODAL", value: false });
  };

  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <img src={confirm} alt="Confirm Image" />
        <div className={S.title}>
          <p className="xl dark-rose bold">Order Confirmed</p>
          <p className="base light-rose">We hope you enjoy your food!</p>
        </div>
        <div className={S.list}>
          {Object.keys(state.context.desserts).map((key, index) => (
            <ModalItem key={index} dessert={state.context.desserts[key]} />
          ))}
          <div className={S.info}>
            <span className="md dark-rose">Order Total</span>
            <span className="xl dark-rose bold">
              ${formatValue(totalPrice)}
            </span>
          </div>
        </div>
        <button onClick={handleClose}>Start New Order</button>
      </div>
    </div>
  );
};

export default Modal;
