import { IDessertType, IImageInfo } from "@utils/typeUtils";
import S from "./item.module.scss";
import { FC, useEffect, useState } from "react";
import addCart from "@assets/icon-add-to-cart.svg";
import dec from "@assets/icon-decrement-quantity.svg";
import inc from "@assets/icon-increment-quantity.svg";
import { formatValue } from "@utils/formatUtils";
import clsx from "clsx";
import { AppContext } from "@machines/appMachine";

interface IProps {
  key: number;
  data: IDessertType;
}

const DessertItem: FC<IProps> = ({ data }) => {
  const state = AppContext.useSelector((state) => state);
  const { send } = AppContext.useActorRef();

  const [imageType, setImageType] = useState<keyof IImageInfo>("desktop");
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (
      state.context.desserts[data.name] &&
      state.context.desserts[data.name].count > 0
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [state.context]);

  useEffect(() => {
    const getWdith = () => {
      if (window.outerWidth < 768) {
        setImageType("mobile");
      } else if (window.outerWidth < 1200) {
        setImageType("tablet");
      } else {
        setImageType("desktop");
      }
    };

    window.addEventListener("resize", getWdith);

    return () => {
      window.removeEventListener("resize", getWdith);
    };
  }, []);

  const handleAddCart = (name?: string) => {
    if (name) {
      const tempdata = state.context.desserts;
      tempdata[name].count += 1;
      send({ type: "SET_DESIERTS", value: tempdata });
    } else {
      const tempdata = state.context.desserts;
      tempdata[data.name] = {
        count: 1,
        name: data.name,
        price: data.price,
        img: data.image.thumbnail,
      };
      send({ type: "SET_DESIERTS", value: tempdata });
    }
  };

  const handleDecCart = (name: string) => {
    const tempdata = state.context.desserts;
    tempdata[name].count -= 1;
    if (tempdata[name].count === 0) {
      delete tempdata[name];
    }
    send({ type: "SET_DESIERTS", value: tempdata });
  };

  return (
    <div className={S.body}>
      <div className={S.img}>
        <img
          src={data.image[imageType]}
          alt={data.name}
          className={clsx(active && S.active)}
        />
        <button
          onClick={() => !active && handleAddCart()}
          className={clsx(active && S.active)}
        >
          {!active ? (
            <>
              <img src={addCart} alt="Add Cart Icon" />
              <span>Add to Cart</span>
            </>
          ) : (
            <>
              <div
                className={S.roundBtn}
                onClick={() => handleDecCart(data.name)}
              >
                <img src={dec} alt="Dec image" />
              </div>
              <span>
                {state.context.desserts[data.name] &&
                  state.context.desserts[data.name].count}
              </span>
              <div
                className={S.roundBtn}
                onClick={() => handleAddCart(data.name)}
              >
                <img src={inc} alt="Inc image" />
              </div>
            </>
          )}
        </button>
      </div>
      <div className={S.infos}>
        <p className="light-rose sm medium">{data.category}</p>
        <p className="dark-rose md bold">{data.name}</p>
        <p className="red md bold">${formatValue(data.price)}</p>
      </div>
    </div>
  );
};

export default DessertItem;
