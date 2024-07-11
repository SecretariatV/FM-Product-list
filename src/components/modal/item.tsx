import { FC } from "react";
import S from "./item.module.scss";
import { DessertType } from "@utils/typeUtils";
import { formatValue } from "@utils/formatUtils";

interface IProps {
  dessert: DessertType;
}

const ModalItem: FC<IProps> = ({ dessert }) => {
  return (
    <div className={S.body}>
      <img src={dessert.img} alt="" />
      <div className={S.info}>
        <h4 className="base dark-rose">{dessert.name}</h4>
        <p className="md red bold">{dessert.count}x</p>
        <span className="md light-rose">${formatValue(dessert.price)}</span>
      </div>
      <span className="base dark-rose">
        ${formatValue(dessert.price * dessert.count)}
      </span>
    </div>
  );
};

export default ModalItem;
