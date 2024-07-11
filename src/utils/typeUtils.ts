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

export type { IDessertType, IImageInfo };
