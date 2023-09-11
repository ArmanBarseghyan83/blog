import Link from "next/link";
import classes from "./main-navigation.module.css";

function MainMavigarion() {
  return (
    <nav className={classes.navbar}>
      <header className={classes.header}>
        <Link href="/">
          <h1 className={classes.logo}>Blog</h1>
        </Link>
        <div>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className={classes.content}>
        <h1>Hi, I'm Arman</h1>
        <p>This is all about web development</p>
      </div>
    </nav>
  );
}

export default MainMavigarion;
