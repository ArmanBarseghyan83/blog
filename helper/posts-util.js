import fs from "fs";
import matter from "gray-matter";

export function getPostsFiles() {
  return fs.readdirSync("./posts");
}

export function getPostData(postFileName) {
  const postSlug = postFileName.replace(/\.md$/, "");
  const fileContent = fs.readFileSync(`./posts/${postSlug}.md`);
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
