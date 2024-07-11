interface IDessertType {
  image: IImageInfo;
  name: string;
  category: string;
  price: number;
}

interface IImageInfo {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

type CategoryType = {
  [key: string]: DessertType;
};

type DessertType = {
  count: number;
  name: string;
  price: number;
  img: string;
};

export type { IDessertType, IImageInfo, DessertType, CategoryType };
