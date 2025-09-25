import "./Post.css";
import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post() {
  //usamos o hook useParams para rotas dinâmicas
  const parametros = useParams();

  // a função find(), faz a procura de um valor verdadeiro dentro de um array, quando acha o primeiro valor verdadeiro, ou seja,
  // neste caso, retorna true quando o mesmo id do arquivo .json é o mesmo do que está sendo acessado na URL
  // é necessário transformar o parametros.id em numero pois ele é uma string e o do json é number
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  // o return sempre encerra a execução de uma função, então aqui, caso a variável post for undefined ou null
  // ela retorna o componente que exibe a mensagem de erro e não executa o return que tem o Routes
  // caso tiver valor, só exibe o conteúdo normal
  if (!post) {
    return <NaoEncontrada />;
  }

  // lógica para criar um array dos 4 últimos posts sem contar com o post selecionado
  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id)) //aqui se cria um novo array de posts sem incluir o post selecionado
    .sort((a, b) => b.id - a.id) // aqui ordena em forma decrescente baseado no índice do array
    .slice(0, 4); // aqui "recorta" somente os 4 primeiros elementos do array
  // ao final teremos um array com os 4 últimos posts sem contar com o post atual

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}>
        <div className="post-markdown-container">
          {/* 
            estamos recebendo do json um texto em .md (markdown), é uma linguagem de marcação que usamos para escrever documentações ou readme de repositórios
            só que o browser não lê markdown, então o componente ReactMarkdown que vem da biblioteca react-markdown faz a conversão do markdown para HTML
          */}
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>

        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>

        {/* 
          aqui criamos uma nova lista usando o map, pegando aquele array criado do postsRecomendados e inserindo no componente PostCard
        */}
        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post, index) => (
            <li key={index}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </PostModelo>
    </PaginaPadrao>
  );
}
