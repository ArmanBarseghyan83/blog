import classes from "./posts.module.css";
import PostsGrid from "./posts-grid";

function Posts(props) {
  return (
    <section className={classes.posts}>
      <h1>{props.title}</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default Posts;
