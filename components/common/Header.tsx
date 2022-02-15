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
    </>
  );
};

export default Header;
