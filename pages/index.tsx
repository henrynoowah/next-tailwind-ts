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
    <>
      <Head>
        <title>Hawoon Blog</title>
      </Head>
      <Layout home>
        <section>
          <ul>
            <li>
              <Link href="/about">
                <a>About Me</a>
              </Link>
            </li>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`} passHref key={id}>
                <li className="my-[10px] cursor-pointer">
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                  <hr />
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
