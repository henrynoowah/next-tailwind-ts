import Layout from "@/components/common/Layout";
import PostCard from "@/components/posts/PostCard";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Hawonn Joh</title>
      </Head>
      <PostCard />
    </Layout>
  );
};

export default Home;
