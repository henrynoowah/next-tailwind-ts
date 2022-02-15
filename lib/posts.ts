import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // {id}.md 에서 파일평식 제거 
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // gray-matter를 통해 post의 metadata 추출
    const matterResult = matter(fileContents);

    return<{id: string, date: string}> {
      id,
      ...matterResult.data
    }
  });

  return allPostsData.sort(({ date: a }, { date: b }) =>{
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getPostData = async(id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  // gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // remark to cnvert .md into html string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}