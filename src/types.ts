export interface CarType {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  horsepower: number;
  weight: number;
  acceleration: number;
  year: number;
  origin: string;
}

export interface AboutPageType {
  title: string;
  first_paragraph: string;
  second_paragraph: string;
}
