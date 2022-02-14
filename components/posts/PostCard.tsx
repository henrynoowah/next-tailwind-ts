import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const PostCard: FC = () => {
  return (
    <div className="w-[60%]">
      <div className="flex justify-center mtb-4">
        <div className="h-[144px] w-[144px] rounded-full overflow-hidden shadow-lg my-[50px]">
          <Image
            src="/images/profile.jpeg"
            height={144}
            width={144}
            alt="henry"
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center">Hawoon Joh</h1>

      <div className="my-[50px] flex justify-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos
          magni cum aliquid soluta fugiat tempore blanditiis? Molestiae sit
          vitae error quia provident, voluptate odit beatae doloremque dolores,
          recusandae in. Iste, ex. Facere omnis eaque odit fuga perferendis
          ipsa! Rem labore perferendis doloremque, eaque voluptates ad enim
          dignissimos delectus, aut deserunt magni facilis corrupti dolore
          incidunt magnam dolor harum sunt. Eaque, nulla quae? Libero quo,
          voluptates ad temporibus consectetur esse nesciunt exercitationem
          quasi animi quae adipisci veritatis deserunt. Qui inventore officia
          sunt quas totam eaque praesentium atque quae a fugit! Quasi aperiam
          quam totam beatae quis similique ab in illum explicabo? At harum
          accusantium quis non omnis dicta ut, sint a velit quisquam dolorem
          voluptatem, placeat aliquid nulla officiis ex! Dolor est atque, ullam
          quia quod excepturi quisquam, quis, incidunt odit recusandae aliquid
          voluptatem? Veniam quidem totam aliquid consequatur animi sequi
          accusamus perferendis! Fugit quis dolores quos necessitatibus nulla
          quibusdam?
        </p>
      </div>

      <h2 className="text-center">
        <Link href="/">
          <a className="text-2xl font-medium hover:underline">Back to home</a>
        </Link>
      </h2>
    </div>
  );
};

export default PostCard;
