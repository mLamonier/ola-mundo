import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import minhaFoto from "assets/minha_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"Sobre mim"}>
      <h3 className={styles.subtitulo}>Olá, eu sou o Miguel!</h3>
      <img
        src={minhaFoto}
        alt="Foto do Miguel Lamonier sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Profissional com mais de 7 anos de experiência em educação e tecnologia,
        atuando como Instrutor de cursos profissionalizantes na área de TI.
      </p>
      <p className={styles.paragrafo}>
        Tenho sólido conhecimento em informática, programação Front-End (HTML,
        CSS, JavaScript, React) e grande facilidade de aprendizado. Sou
        apaixonado por ensinar, aprender e enfrentar novos desafios, estando
        sempre atualizado nas tendências tecnológicas.
      </p>

      <p className={styles.paragrafo}>
        Busco novas oportunidades como Desenvolvedor Front-End Júnior, onde
        posso aliar minha experiência didática ao desenvolvimento de soluções
        inovadoras.
      </p>
    </PostModelo>
  );
}
