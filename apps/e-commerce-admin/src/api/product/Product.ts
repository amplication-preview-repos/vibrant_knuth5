import { Cart } from "../cart/Cart";

export type Product = {
  carts?: Array<Cart>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
