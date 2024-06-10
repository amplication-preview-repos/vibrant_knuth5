import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
