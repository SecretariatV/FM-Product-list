import { IDessertType, IImageInfo } from "@utils/typeUtils";
import S from "./item.module.scss";
import { FC, useEffect, useState } from "react";
import addCart from "@assets/icon-add-to-cart.svg";
import { fomatValue } from "@utils/formatUtils";

interface IProps {
  key: number;
  data: IDessertType;
}

export const DessertItem: FC<IProps> = ({ data }) => {
  const [imageType, setImageType] = useState<keyof IImageInfo>("desktop");

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
  return (
    <div className={S.body}>
      <div className={S.img}>
        <img src={data.image[imageType]} alt={data.name} />
        <button>
          <img src={addCart} alt="Add Cart Icon" />
          <span>Add to Cart</span>
        </button>
      </div>
      <div className={S.infos}>
        <p className="light-rose sm medium">{data.category}</p>
        <p className="dark-rose md bold">{data.name}</p>
        <p className="red md bold">${fomatValue(data.price)}</p>
      </div>
    </div>
  );
};
