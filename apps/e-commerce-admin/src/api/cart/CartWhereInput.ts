import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
