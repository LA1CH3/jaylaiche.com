import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export const formatDate = (date) => format(parseISO(date), "LLLL d, yyyy");
