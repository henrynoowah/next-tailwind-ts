import { FC } from "react";
import { parseISO, format } from "date-fns";

interface IProps {
  dateString: string;
}

const Date: FC<IProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
