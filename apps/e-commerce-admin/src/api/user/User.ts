import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type User = {
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
