import { User } from "../user/User";

export type Listname = {
  createdAt: Date;
  id: string;
  text: boolean;
  uid?: User;
  updatedAt: Date;
};
