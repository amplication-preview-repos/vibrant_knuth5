import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
