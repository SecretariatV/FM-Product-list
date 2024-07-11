import { formatValue } from "@utils/formatUtils";
import S from "./item.module.scss";
import { FC } from "react";
import closeIcon from "@assets/icon-remove-item.svg";
import { AppContext } from "@machines/appMachine";

interface IProps {
  key: number;
  cart: string;
}

export const Item: FC<IProps> = ({ cart }) => {
  const state = AppContext.useSelector((state) => state);
  const { send } = AppContext.useActorRef();

  const handleClose = () => {
    const tempdata = state.context.desserts;
    delete tempdata[cart];
    send({ type: "SET_DESIERTS", value: tempdata });
  };

  return (
    <div className={S.body}>
      <div className={S.info}>
        <h3 className="base dark-rose">{state.context.desserts[cart].name}</h3>
        <div className={S.price}>
          <span className="base red bold">
            {state.context.desserts[cart].count}x
          </span>
          <span className="base light-rose bold">
            @ ${formatValue(state.context.desserts[cart].price)}
          </span>
          <span className="base light-rose bold">
            $
            {formatValue(
              state.context.desserts[cart].price *
                state.context.desserts[cart].count
            )}
          </span>
        </div>
      </div>
      <div className={S.close} onClick={handleClose}>
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
};
