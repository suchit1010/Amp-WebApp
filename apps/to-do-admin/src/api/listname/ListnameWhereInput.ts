import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListnameWhereInput = {
  id?: StringFilter;
  text?: BooleanFilter;
  uid?: UserWhereUniqueInput;
};
