import Date from "@/components/common/Date";
import Layout from "@/components/common/Layout";
import { getAllPostIds, getPostData } from "lib/posts";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

interface IProps {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}
const Post: NextPage<IProps> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-3xl font-bold mb-[20px]">{postData.title}</h1>
      <div className="text-gray-400">
        <Date dateString={postData.date} />
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
