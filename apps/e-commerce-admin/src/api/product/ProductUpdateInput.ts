import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  carts?: CartUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
};
