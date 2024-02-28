export interface CarListType {
  id: number | string;
  thumbnail: string;
  images: string[];
  name: string;
  abbreviateName: string;
  dealType: string;
  description: string;
  type: string;
  capacity: number;
  steering: string;
  gasoline: number;
  price: number;
  oldPrice: number;
  reviews: Review[];
  rating: number;
  promoTitle: string;
  promoDesc: string;
}

export interface Review {
  avatar: string;
  name: string;
  position: string;
  rating: number;
  date: string;
  review: string;
}
