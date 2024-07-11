import { DESSERT_LIST } from "@utils/dataUtils";
import S from "./index.module.scss";
import { DessertItem } from "./item";

export const Desserts = () => {
  return (
    <div className={S.body}>
      <h1 className="dark-rose bold">Desserts</h1>
      <div className={S.list}>
        {DESSERT_LIST.map((dessert, index) => (
          <DessertItem key={index} data={dessert} />
        ))}
      </div>
    </div>
  );
};
