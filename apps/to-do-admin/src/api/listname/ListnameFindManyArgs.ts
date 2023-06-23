import { ListnameWhereInput } from "./ListnameWhereInput";
import { ListnameOrderByInput } from "./ListnameOrderByInput";

export type ListnameFindManyArgs = {
  where?: ListnameWhereInput;
  orderBy?: Array<ListnameOrderByInput>;
  skip?: number;
  take?: number;
};
