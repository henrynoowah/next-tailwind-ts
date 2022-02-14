import Layout from "@/components/common/Layout";
import { getSortedPostsData } from "lib/posts";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface IProps {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}

const Home: NextPage<IProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>main</title>
      </Head>
      <div className="w-[540px]">
        <Link href="/about" passHref>
          <button className="text-2xl text-white rounded-md font-medium hover:underline bg-indigo-400 px-[30px] py-[10px]">
            About Me
          </button>
        </Link>
      </div>
      <section>
        <h2 className="text-2xl">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="my-[10px]">
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
