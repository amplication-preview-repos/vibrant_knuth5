import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  carts?: CartCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
};
