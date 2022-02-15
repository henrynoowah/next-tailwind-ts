import Head from "next/head";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  home?: boolean;
}
const Layout: FC<IProps> = ({ children, home }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      <div className="flex justify-center">
        <div className="w-[60%] flex-col justify-center">
          {children}
          {!home && (
            <div className="mt-[50px] w-[100%] flex justify-center">
              <Link href="/">
                <a className="hover:underline text-blue-600">← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
