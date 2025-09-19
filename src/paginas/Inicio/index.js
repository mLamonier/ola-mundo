import styles from "./Inicio.module.css";

import posts from "json/posts.json";
import Post from "componentes/Post";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post, index) => (
        <li key={index}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
