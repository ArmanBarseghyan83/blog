import { Fragment } from "react";
import Head from "next/head";

import Posts from "@/components/posts/posts";
import { getFeaturedPosts } from "@/helper/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Arman' Blog</title>
        <meta name="description" content="I post about web programming" />
      </Head>
      <Posts posts={props.posts} title="Featured Posts" />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
