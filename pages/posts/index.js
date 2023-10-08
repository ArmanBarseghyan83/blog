import Posts from "@/components/posts/posts";
import { getAllPosts } from "@/helper/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="All about web development."
        />
      </Head>
      <Posts posts={props.posts} title="All Posts" />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts }
  };
}

export default AllPostsPage;
