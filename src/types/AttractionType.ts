export type AttractionTypeResponse = {
  id: number;
  title: null;
  featured_image: string;
  managed: boolean;
  content: string;
  slug: string;
  location: string;
  booking_notice: null;
  booking_link: string;
  images: [
    {
      title: number;
      url: string;
    }
  ];
  address: string;
  products: Product[];
}[];

export type PopularAttractionType = [
  {
    id: number;
    entity_id: number;
    name: string;
    description: string;
    featured_image: string;
    managed: number;
    is_public: number;
    slug: string;
    location: string;
    booking_notice: string;
    booking_link: string;
    address: string;
    created_at: string;
    updated_at: string;
    bills_count: number;
  }
];

export type SiteBySlugNameResponse = {
  id: number;
  title: string;
  featured_image: string;
  managed: number;
  content: string;
  slug: string;
  location: number[];
  booking_notice: null;
  booking_link: null;
  images: ImageResponse[];
  address: string;
  products: Product[];
};

export type AttractionByEntityResponse = {
  id: 8;
  title: string;
  featured_image: string;
  managed: boolean;
  content: string;
  slug: string;
  location: string;
  booking_notice: string;
  booking_link: string;
  images: [];
  address: string;
  products: Product[];
};
export type ImageResponse = {
  id: 1;
  title: string;
  url: string;
};
export type Product = {
  product_code: string;
  name: string;
  price: string;
  currency: string;
  product_category: string;
  price_USD: string;
  price_group: string;
};
