interface DessertType {
  image: ImageInfo;
  name: string;
  category: string;
  price: number;
}

interface ImageInfo {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export type { DessertType };
