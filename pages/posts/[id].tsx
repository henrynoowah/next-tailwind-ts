import Layout from "@/components/common/Layout";
import { getAllPostIds, getPostData } from "lib/posts";
import { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface IProps {
  postData: {
    id: string;
    title: string;
    date: any;
  };
}

const Post: NextPage<IProps> = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
