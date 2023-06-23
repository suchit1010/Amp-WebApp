import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListnameWhereUniqueInput } from "../listname/ListnameWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listname?: ListnameWhereUniqueInput;
  username?: StringFilter;
};
