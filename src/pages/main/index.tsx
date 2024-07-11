import { Cart } from "@components/cart";
import S from "./index.module.scss";
import { Desserts } from "@components/desserts";

const MainPage = () => {
  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <Desserts />
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
