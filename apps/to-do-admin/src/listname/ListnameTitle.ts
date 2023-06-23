import { Listname as TListname } from "../api/listname/Listname";

export const LISTNAME_TITLE_FIELD = "id";

export const ListnameTitle = (record: TListname): string => {
  return record.id || String(record.id);
};
