import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import PostCard from "@/components/posts/PostCard";
import Layout from "@/components/common/Layout";

const firstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>first-post</title>
      </Head>
      <PostCard />
    </Layout>
  );
};

export default firstPost;
