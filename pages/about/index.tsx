import Layout from "@/components/common/Layout";
import AboutMe from "@/components/posts/AboutMe";
import PostCard from "@/components/posts/AboutMe";
import { NextPage } from "next";
import Head from "next/head";

const index: NextPage = () => {
  return (
    <div className="w-[100%] flex justify-center">
      <Head>
        <title>Hawonn Joh</title>
      </Head>
      <AboutMe />
    </div>
  );
};

export default index;
