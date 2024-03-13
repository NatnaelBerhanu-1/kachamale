export interface CarListType {
  id: number | string;
  thumbnail: string;
  status: string;
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
  reviews: ReviewType[];
  rating: number;
  promoTitle: string;
  promoDesc: string;
  owner: {
    fullName: string;
    lastSeenAt: string;
    avatar:string;

  }
}

export interface ReviewType {
  avatar: string;
  name: string;
  position: string;
  rating: number;
  date: string;
  review: string;
}
