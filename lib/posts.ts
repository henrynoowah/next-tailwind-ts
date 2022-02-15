import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export const getPostData = (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data
  }
}