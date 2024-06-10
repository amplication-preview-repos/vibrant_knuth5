import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  method?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
};
