import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode[];
}

const Layout: FC<IProps> = ({ children }) => {
  return <div className="w-[100%] flex justify-center">{children}</div>;
};

export default Layout;
