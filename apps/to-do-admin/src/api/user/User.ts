import { Listname } from "../listname/Listname";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listname?: Listname | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
