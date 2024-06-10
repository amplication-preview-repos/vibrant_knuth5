import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
