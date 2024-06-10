import { CartCreateNestedManyWithoutUsersInput } from "./CartCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  carts?: CartCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
