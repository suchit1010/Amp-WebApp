import { ListnameWhereUniqueInput } from "../listname/ListnameWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  listname?: ListnameWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
