import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
