import styles from "./Inicio.module.css";

import posts from "json/posts.json";
import PostCard from "componentes/PostCard";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post, index) => (
        <li key={index}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
