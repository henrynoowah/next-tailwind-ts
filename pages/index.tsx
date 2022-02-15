import Date from "@/components/common/Date";
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
          <p className="text-center my-[20px]">
            This is a sample website - you’ll be building a site like this on
            our <br />
            <a
              className="text-indigo-400 hover:underline"
              href="https://nextjs.org/learn"
            >
              Next.js tutorial
            </a>
          </p>
          <ul>
            <li>
              <Link href="/about">
                <a>About Me</a>
              </Link>
              <small className="text-gray-400">
                <p>.</p>
              </small>
              <hr />
            </li>
            {allPostsData.map(({ id, date, title }) => (
              <li className="my-[10px] cursor-pointer" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="text-gray-400">
                  <Date dateString={date} />
                </small>
                <hr />
              </li>
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
