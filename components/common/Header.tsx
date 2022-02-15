import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <div className="flex justify-center mtb-4">
        <div className="h-[144px] w-[144px] rounded-full overflow-hidden shadow-lg mt-[50px] mb-[20px]">
          <Image
            src="/images/profile.jpeg"
            height={144}
            width={144}
            alt="henry"
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center">Hawoon Joh</h1>
      <p className="text-center my-[20px]">
        This is a sample website - you’ll be building a site like this on{" "}
        <a
          className="text-indigo-400 hover:underline"
          href="https://nextjs.org/learn"
        >
          our Next.js tutorial
        </a>
      </p>
    </>
  );
};

export default Header;
