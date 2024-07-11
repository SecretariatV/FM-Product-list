import S from "./index.module.scss";
import empty from "@assets/illustration-empty-cart.svg";

export const Cart = () => {
  return (
    <div className={S.body}>
      <h2>Your Cart({0})</h2>
      {
        <div className={S.empty}>
          <img src={empty} alt="" />
          <span className="medium-rose md">
            Your added items will appear here
          </span>
        </div>
      }
    </div>
  );
};
