import fs from "fs";
import matter from "gray-matter";

// Read directory using file system
export function getPostsFiles() {
  return fs.readdirSync("./posts");
}

// Get a single post data
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

// Get all posts data
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

// Get featured posts data
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
