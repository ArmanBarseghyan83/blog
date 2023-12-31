import { Fragment } from "react";
import Head from "next/head";

import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/helper/posts-util";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

// Set post data into the props
export function getStaticProps(context) {
  const slug = context.params.slug;

  const postData = getPostData(slug);

  return {
    props: { post: postData },
    revalidate: 60,
  };
}

// Provide paths for pre rendering the data
export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
