import Layout from "@/components/common/Layout";
import PostCard from "@/components/posts/PostCard";
import { NextPage } from "next";
import Head from "next/head";

const index: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Hawonn Joh</title>
      </Head>
      <PostCard />
    </Layout>
  );
};

export default index;
