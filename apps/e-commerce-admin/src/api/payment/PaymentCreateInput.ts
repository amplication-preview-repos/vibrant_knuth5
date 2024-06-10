import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  method?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
};
